import db from "@helpers/database";
import { Schema } from "mongoose";

const PokemonSchema = new Schema({
  pokemon_id: { type: Number, unique: true },
  name: String,
  height: Number,
  weight: Number,
  types: [
    {
      slot: Number,
      type: { type: { name: String, url: String } },
    },
  ],
  sprites: {
    back_default: String,
    back_female: String,
    back_shiny: String,
    back_shiny_female: String,
    front_default: String,
    front_female: String,
    front_shiny: String,
    front_shiny_female: String,
    other: Object,
    versions: {
      "generation-i": {
        "red-blue": Object,
        yellow: Object,
      },
      "generation-ii": {
        crystal: Object,
        gold: Object,
        silver: Object,
      },
      "generation-iii": {
        emerald: Object,
        "firered-leafgreen": Object,
        "ruby-sapphire": Object,
      },
      "generation-iv": {
        "diamond-pearl": Object,
        "heartgold-soulsilver": Object,
        platinum: Object,
      },
      "generation-v": {
        "black-white": Object,
      },
      "generation-vi": {
        "omegaruby-alphasapphire": Object,
        "x-y": Object,
      },
      "generation-vii": {
        icons: Object,
        "ultra-sun-ultra-moon": Object,
      },
      "generation-viii": {
        icons: Object,
      },
    },
  },
});

export const Pokemon = db.model("Pokemon", PokemonSchema, "pokemon");
