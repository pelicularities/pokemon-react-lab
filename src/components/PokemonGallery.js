import React from "react";
import PokemonCard from "./PokemonCard";
import POKEMON from "../pokemon/pokemon";

function PokemonGallery() {
  const cardArray = POKEMON.map((pokemon) => {
    return <PokemonCard pokemon={pokemon} />;
  });
  return <div className="card-container">{cardArray}</div>;
}

export default PokemonGallery;
