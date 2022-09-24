set -e 

echo "Setting up the database..."

mongosh << EOF
  use $MONGO_INITDB_DATABASE

  // Create Role
  pokemonTrainerRole = db.createRole({
    role: "pokemonTrainer",
    privileges: [
      { resource: { db: "pokedex", collection: "pokemon" }, actions: [ "find", "update", "insert", "remove" ]}
    ],
    roles: []
  })

  // Create user
  dbAdmin = db.getSiblingDB("$MONGO_INITDB_DATABASE");
  dbAdmin.createUser({
    user: "$DB_USER",
    pwd: "$DB_PSWD",
    roles: [{ role: "pokemonTrainer", db: "$MONGO_INITDB_DATABASE"}],
    mechanisms: ["SCRAM-SHA-1"],
  });

  // Authenticate user
  dbAdmin.auth({
    user: "$DB_USER",
    pwd: "$DB_PSWD",
    mechanisms: ["SCRAM-SHA-1"]
  });

  // Create DB and collection
  db = new Mongo().getDB("$DB_NAME");
  db.createCollection("pokemon", { capped: false });
EOF

echo "Database set up completed."
