set -e;

# import pokemon collection file onto the DB
mongoimport --jsonArray --db=$DB_NAME --collection=pokemon --file=/docker-entrypoint-initdb.d/data/pokemon.collection.json
