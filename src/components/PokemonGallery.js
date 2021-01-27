import React from "react";
import PokemonCard from "./PokemonCard";
import POKEMON from "../pokemon/pokemon";

function PokemonGallery() {
  const cardArray = POKEMON.map((pokemon) => {
    return (
      <PokemonCard
        pokemon={pokemon}
        key={`${pokemon.id}-${pokemon.name.english}`}
      />
    );
  });
  return <div className="card-container">{cardArray}</div>;
}

export default PokemonGallery;
