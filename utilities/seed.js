const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon'

const seed = async () => {
    const pokemonList = await fetch(`${POKEMON_API}?limit=150`).then(response => response.json())

    const detailedPokemonList = await Promise.all(pokemonList.results.map(async (pokemon) => {
        const pokeDetails = await fetch(`${pokemon.url}`).then(response => response.json())
        return {
            pokemon_id: pokeDetails.id,
            name: pokeDetails.name,
            height: pokeDetails.height,
            weight: pokeDetails.weight,
            types: pokeDetails.types,
            sprites: pokeDetails.sprites
        }
    }))

    const fs = require('fs')
    fs.writeFileSync('config/mongo/data/pokemon.collection.json', JSON.stringify(detailedPokemonList))
}

seed()