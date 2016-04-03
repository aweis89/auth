defmodule SessionController do
  use Don.Web, :controller
  alias Don.{User, Repo}

  def create(_conn, %{"email" => email, "password" => password}) do
    User.find_by_email_and_password(email, password)
    |> Repo.all
  end
end
