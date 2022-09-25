import { RequestHandler } from "express";

import { PokemonService } from "@services/index";

const get: RequestHandler<never, any, never, never, never> = async (
  request,
  response
) => {
  try {
    const pokemon = await PokemonService.getPokemon();
    return response.json(pokemon);
  } catch (error) {
    return response.status(500).json({ message: "internal server error" });
  }
};

export default get