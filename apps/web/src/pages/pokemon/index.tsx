import { BACKEND_URL } from "../../helpers/env";

type PokemonPageProps = {
  pokemon: any;
};

type PokemonDTO = {
  _id: string;
  pokemon_id: number;
  name: string;
};

export default function Pokemon(props: PokemonPageProps) {
  return (
    <div>
      {props.pokemon.map((pokemon: PokemonDTO) => {
        return (
          <div>
            <p>{pokemon.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch(`${BACKEND_URL}/api/pokemon`);
  const data = await response.json();

  return {
    props: {
      pokemon: data,
    },
  };
}
