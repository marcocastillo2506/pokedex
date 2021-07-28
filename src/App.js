import { useState } from "react";

import usePokedex from "./graphql-api/usePokedex";
import PokeCard from "./components/PokeCard";
import Loading from "./components/Loading";
import PokemonNotFound from "./components/PokemonNotFound";
import Form from "./components/Form";
import Evolutions from "./components/Evolutions";
import "./App.css";

/**
 *  1. Implement an input field to search a pokemon by its name
 *  2. When loading flag is true, show a loading component
 *  3. When pokemon response is empty, show a not found card component
 *  4. If the pokemon has evolutions show them.
 *  5. When user clicks on a evolution update the PokeCard
 *  5. Test you application
 *
 *  NOTE: DO NOT change PokeCard component and usePokedex hook
 */

export default function App() {
  /**
   * usePokedex will return same result as apollograhpql useQuery hook
   * see https://www.apollographql.com/docs/react/api/react/hooks/#result
   */
  const [pokemon, setPokemon] = useState("")

  const result = usePokedex(pokemon);
  //const spinningPokeBall = result.loading;

  function handleOnClickEvolution(evolution) {
    setPokemon(evolution.name);
  }
  return (
    <div className="App">
      {result.loading && <Loading />}
    
      <Form pokemon={pokemon} setPokemon={setPokemon}/>
      {result.data && result.data.pokemon && (
        <PokeCard pokemon={result.data.pokemon} />
      )}  
      { typeof result.data !== "undefined" &&
        result.data.pokemon === null &&
        result.loading === false && 
        <PokemonNotFound />}
      {result.data &&
        result.data.pokemon &&
        result.data.pokemon.evolutions &&
        result.data.pokemon.evolutions.map((evolution) => (
          <Evolutions key={evolution} pokemon={evolution}  
          onClick={() => handleOnClickEvolution(evolution)}
          />
        ))}
    </div>
  );
}
