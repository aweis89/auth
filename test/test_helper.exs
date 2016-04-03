ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Don.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Don.Repo --quiet)
#Ecto.Adapters.SQL.begin_test_transaction(Don.Repo)
