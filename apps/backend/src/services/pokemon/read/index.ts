import { Pokemon } from "@models/index";

export const getPokemon = async () => {
  const pokemon = await Pokemon.find({})
    .select("name pokemon_id")
    .sort({ pokemon_id: "asc" })
    .exec();
  return pokemon;
};
