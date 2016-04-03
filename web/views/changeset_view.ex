defmodule Don.ChangesetView do
  def render(changeset) do
    errors = Enum.map(changeset.errors, fn {field, detail} ->
      error_message = "#{field} #{render_detail(detail)}"
      %{
        source: %{ pointer: "/data/attributes/#{field}" },
        title: "Invalid Attribute",
        detail: %{field => error_message},
        message: String.capitalize(error_message)
      }
    end)

    %{errors: errors}
  end

  defp render_detail({message, values}) do
    Enum.reduce values, message, fn {k, v}, acc ->
      String.replace(acc, "%{#{k}}", to_string(v))
    end
  end

  defp render_detail(message) do
    message
  end
end
