import React from "react";

const PokeCard = ({ pokemon }) => {
  return (
    <center><div>
      <h2>
        {pokemon.name} ({pokemon.number})
      </h2>
      <img src={pokemon.image} alt="pokemon" />
      <table>
        <thead>
          <tr>
            <th>Ability</th>
            <th>Type</th>
            <th>Damage</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.attacks.special.map((attack, i) => (
            <tr key={i}>
              <td>{attack.name}</td>
              <td>{attack.type}</td>
              <td>{attack.damage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </center>
  );
};

export default PokeCard;
