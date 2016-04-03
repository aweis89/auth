defmodule Don.Router do
  use Don.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug Don.Auth, repo: Don.Repo
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Don do
    pipe_through :browser

    get "/", PageController, :index
  end

  scope "/", Don do
    pipe_through :api
    resources "/users", UserController, only: [:index, :show, :new, :create]
  end

  # Other scopes may use custom stacks.
  # scope "/api", Don do
  #   pipe_through :api
  # end
end
