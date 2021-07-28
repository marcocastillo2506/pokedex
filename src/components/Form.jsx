import React from "react";

const Form = ({ pokemon, setPokemon }) =>{

      const newPokemon = (pokemon) => {
        setPokemon(pokemon);
      };
    
      function handleSubmit(e) {
        e.preventDefault();
        newPokemon(e.target.value);
        setPokemon(newPokemon);
      }

    return (
        <form >
          <h2>
            <label  className="label">
            🧿  Search for your favorite pokemon 🧿
            </label>
          </h2>
          <input itemRef={pokemon}  onChange={handleSubmit} type="text" />
        </form>
    )
};

export default Form;