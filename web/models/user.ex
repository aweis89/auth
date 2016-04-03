defmodule Don.User do
  import Ecto.Query, only: [from: 2]
  use Don.Web, :model
  alias Don.{Repo, User}
  alias Comeonin.Bcrypt, as: Crypt
  @required_fields [:email, :password]
  @permitted_fields [:first_name, :last_name]
  @password_fail "User/Password is invalid"

  schema "users" do
    field :first_name, :string
    field :last_name, :string
    field :email, :string
    field :is_admin, :boolean
    field :password, :string, virtual: true
    field :password_hash, :string

    timestamps
  end

  defp toknize(%User{is_admin: is_admin}) do
    %{is_admin: is_admin}
    |> Joken.token
    |> with_signer(hs256("my_secret"))
  end

  def find_by_email(email) do
    from(u in __MODULE__, where: u.email == ^email) |> Repo.one
  end

  def registration_changeset(params \\ :empty) do
    %Don.User{}
    |> cast(params, @required_fields, @permitted_fields)
    |> validate_length(:password, min: 6, max: 20)
    |> validate_format(:email, ~r/@/)
    |> unique_constraint(:email)
    |> put_pass_hash()
  end

  def validate_password(user = %Don.User{password_hash: hash}, password) do
    case checkpw(password, hash) do
      true -> {:ok, user}
      false -> {:error, @password_fail}
    end
  end
  def validate_password(_, _), do: {:error, @password_fail}

  defp put_pass_hash(changeset = %Ecto.Changeset{valid?: true, changes: %{password: pw}}) do
    put_change changeset, :password_hash, encrypt(pw)
  end
  defp put_pass_hash(changeset = %Ecto.Changeset{valid?: false}), do: changeset

  defp encrypt(password), do: Crypt.hashpwsalt(password)
  defp checkpw(password, hash), do: Crypt.checkpw(password, hash)
end
