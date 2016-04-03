defmodule Don.UserTest do
  use ExUnit.Case
  alias Don.{User, Repo}
  alias Ecto.Adapters.SQL
  alias Ecto.Changeset, as: Cset

  setup do
    SQL.begin_test_transaction(Repo)

    on_exit fn ->
      SQL.rollback_test_transaction(Repo)
    end
  end

  test "#registration_changeset" do
    assert match? {:ok, user}, create_user
    assert match? {:error, %Cset{errors: [email: "has already been taken"]}}, create_user
  end

  test "#auth" do
    {:ok, user} = create_user
    assert match? {:ok, %User{}}, User.auth(user.email, user.password)
    assert match? {:error, "user cannot be found"}, User.auth("non@exist.com", user.password)
    assert match? {:error, "password is invalid"}, User.auth(user.email, "wrong_password")
  end

  def create_user do
    %{email: "arod@gmail.com", password: "test1234"}
    |> User.registration_changeset()
    |> Repo.insert()
  end
end
