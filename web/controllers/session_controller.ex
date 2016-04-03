defmodule SessionController do
  use Don.Web, :controller
  alias Don.{User}

  def create(conn, %{"email" => email, "password" => password}) do
    email
    |> User.find_by_email
    |> User.validate_password(conn)
    |> create_response(conn)
  end

  defp create_response({:ok, user}, conn) do
    json conn, %{token: User.tokenize(user)}
  end

  defp create_response({:error, error}, conn) do
    json conn, %{error: error}
  end
end
