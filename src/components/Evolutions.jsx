import React from "react";

function Evolutions({ pokemon, onClick }) {
  return (
    <div className="evolution" onClick={onClick}>
      <img src={pokemon.image} alt="Evolution" />
      <p>{pokemon.name}</p>
    </div>
  );
}

export default Evolutions;