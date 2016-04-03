defmodule Don.UserController do
  use Don.Web, :controller
  alias Don.User
  require IEx

  def index(conn, _params) do
    users = Repo.all(User)
    render conn, "index.json", data: users
  end

  def show(conn, %{"id" => id}) do
    user = Repo.get(User, id)
    render conn, "show.json", data: user
  end

  def new(conn, _params) do
    changeset = User.registration_changeset(%User{})
    render conn, "new.html", changeset: changeset
  end

  def create(conn, %{"user" => user_params}) do
    changeset = User.registration_changeset(user_params)
    create_response conn, Repo.insert(changeset)
  end

  defp create_response(conn, {:ok, %User{email: email, password: password}}) do
    conn
    |> SessionController.create(%{email: email, password: password})
  end

  defp create_response(conn, {:error, changeset}) do
    conn
    |> render("errors.json", %{changeset: changeset})
  end
end

