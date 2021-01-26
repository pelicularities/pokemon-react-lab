import React from "react";

function PokemonType({ type }) {
  return <span className={`type ${type}`}>{type}</span>;
}

export default PokemonType;
