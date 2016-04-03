defmodule Don.User do
  import Ecto.Query, only: [from: 2]
  use Don.Web, :model
  alias Don.Repo
  alias Comeonin.Bcrypt, as: Crypt
  @required_fields [:email, :password]
  @permitted_fields [:first_name, :last_name]

  schema "users" do
    field :first_name, :string
    field :last_name, :string
    field :email, :string
    field :is_admin, :boolean
    field :password, :string, virtual: true
    field :password_hash, :string

    timestamps
  end

  def auth(email, password) do
    email
    |> find_by_email()
    |> validate_password(password)
  end

  def registration_changeset(params \\ :empty) do
    %Don.User{}
    |> cast(params, @required_fields, @permitted_fields)
    |> validate_length(:password, min: 6, max: 20)
    |> validate_format(:email, ~r/@/)
    |> unique_constraint(:email)
    |> put_pass_hash()
  end

  defp put_pass_hash(changeset = %Ecto.Changeset{valid?: true, changes: %{password: pw}}) do
    put_change changeset, :password_hash, encrypt(pw)
  end
  defp put_pass_hash(changeset = %Ecto.Changeset{valid?: false}), do: changeset

  defp encrypt(password), do: Crypt.hashpwsalt(password)
  defp checkpw(password, hash), do: Crypt.checkpw(password, hash)

  defp find_by_email(email) do
    from(u in __MODULE__, where: u.email == ^email) |> Repo.one
  end

  defp validate_password(user = %Don.User{password_hash: hash}, password) do
    case checkpw(password, hash) do
      true -> {:ok, user}
      false -> {:error, "password is invalid"}
    end
  end
  defp validate_password(_, _), do: {:error, "user cannot be found"}
end
