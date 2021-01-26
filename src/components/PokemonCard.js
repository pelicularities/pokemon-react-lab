import React from "react";
import PokemonType from "./PokemonType";

function PokemonCard({ pokemon }) {
  const { id, name, type, base } = pokemon;

  const typeComponents = type.map((eachType) => {
    return <PokemonType type={eachType} />;
  });
  return (
    <div className="card">
      <div>
        <img src={`${process.env.PUBLIC_URL}/pokemonImage/${id}.png`} />
      </div>
      <div>{name.english}</div>
      <div>{typeComponents}</div>
      <ul>
        <li>HP: {base.HP}</li>
        <li>Attack: {base.Attack}</li>
        <li>Defence: {base.Defence}</li>
        <li>Sp. Atk: {base.SpAttack}</li>
        <li>Sp. Def: {base.SpDefence}</li>
        <li>Speed: {base.Speed}</li>
      </ul>
    </div>
  );
}

export default PokemonCard;
