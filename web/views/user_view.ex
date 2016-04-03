defmodule Don.UserView do
  use Don.Web, :view
  @attributes [:id, :first_name, :last_name, :email, :is_admin]

  def render("index.json", %{data: users}) do
    Enum.map users, &(Map.take &1, @attributes)
  end

  def render("show.json", %{data: user}) do
    Map.take user, @attributes
  end

  def render("errors.json", %{changeset: changeset}) do
    Don.ChangesetView.render(changeset)
  end
end
