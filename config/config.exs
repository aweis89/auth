# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :don, Don.Endpoint,
  url: [host: "localhost"],
  root: Path.dirname(__DIR__),
  secret_key_base: "tEd7xvRek+uLDEK8wBG+B/QZKB1ZD8QVsbdRQS1A3JJral8olU2s5wJBATP5punI",
  render_errors: [accepts: ~w(html json)],
  pubsub: [name: Don.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

# Configure phoenix generators
config :phoenix, :generators,
  migration: true,
  binary_id: false

config :guardian, Guardian,
  allowed_algos: ["HS512"], # optional
  verify_module: Guardian.JWT,  # optional
  issuer: "MyApp",
  ttl: { 30, :days },
  verify_issuer: true, # optional
  secret_key: "2i62a3tXeJDG12bCK41tRR0t5BMlxAnQv6oaqcASGaw92GponJ4KoJ8MpE26eygs",
  serializer: MyApp.GuardianSerializer
