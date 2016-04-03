defmodule Don.SessionInteractor do
  @key "gZH75aKtMN3Yj0iPS4hcgUuTwjAzZr9C"


  def validate_token(jwt) do
    case JsonWebToken.verify(jwt, %{key: @key}) do
      {:ok, claims} ->  {:ok, claims}
      {:error, msg} -> {:error, msg}
    end
  end

  def gen_jwt(user = %Don.User{id: id}) do
    JsonWebToken.sign(%{user_id: id}, %{key: @key})
  end
end

