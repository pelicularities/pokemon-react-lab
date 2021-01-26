import React from "react";
import PokemonCard from "./PokemonCard";
import POKEMON from "../pokemon/pokemon";

function PokemonGallery() {
  const cardArray = POKEMON.map((pokemon) => {
    return <PokemonCard pokemon={pokemon} />;
  });
  return cardArray;
}

export default PokemonGallery;
