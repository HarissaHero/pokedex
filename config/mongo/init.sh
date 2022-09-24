set -e 

echo "Setting up the database..."

mongosh << EOF
  // Create DB
  db = new Mongo().getDB("$DB_NAME");

  // Create Role
  pokemonTrainerRole = db.createRole({
    role: "pokemonTrainer",
    privileges: [
      { resource: { db: "pokedex", collection: "pokemon" }, actions: [ "find", "update", "insert", "remove" ]}
    ],
    roles: []
  })

  // Create user
  db.createUser({
    user: "$DB_USER",
    pwd: "$DB_PSWD",
    roles: [{ role: "pokemonTrainer", db: "$DB_NAME"}],
    mechanisms: ["SCRAM-SHA-1"],
  });

  // Authenticate user
  db.auth({
    user: "$DB_USER",
    pwd: "$DB_PSWD",
    mechanisms: ["SCRAM-SHA-1"]
  });

  // Create collection of pokemon
  db.createCollection("pokemon", { capped: false });
EOF

echo "Database set up completed."
