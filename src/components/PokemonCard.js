import React from "react";
import PokemonType from "./PokemonType";

function PokemonCard({ pokemon }) {
  const { id, name, type, base } = pokemon;

  const typeComponents = type.map((eachType) => {
    return <PokemonType type={eachType} />;
  });
  return (
    <div className="card">
      <div className="img-container">
        <img
          src={`${process.env.PUBLIC_URL}/pokemonImage/${id}.png`}
          alt={name.english}
          className="img-fluid"
        />
      </div>
      <h3>{name.english}</h3>
      <div className="type-container">{typeComponents}</div>
      <ul className="list-style-none">
        <li>
          <b>HP</b>: {base.HP}
        </li>
        <li>
          <b>Attack</b>: {base.Attack}
        </li>
        <li>
          <b>Defence</b>: {base.Defence}
        </li>
        <li>
          <b>Sp. Atk</b>: {base.SpAttack}
        </li>
        <li>
          <b>Sp. Def</b>: {base.SpDefence}
        </li>
        <li>
          <b>Speed</b>: {base.Speed}
        </li>
      </ul>
    </div>
  );
}

export default PokemonCard;
