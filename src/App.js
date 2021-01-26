import React from "react";
import "./App.css";
import PokemonGallery from "./components/PokemonGallery";

function App() {
  return (
    <div className="App">
      <img
        src={`${process.env.PUBLIC_URL}/Pokemon_logo.png`}
        id="logo"
        alt="Pokémon: gotta catch'em all!"
      />
      <PokemonGallery />
    </div>
  );
}

export default App;
