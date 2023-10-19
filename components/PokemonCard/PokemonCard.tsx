"use client";
import React from "react";

function PokemonCard({ pokemon, imageUrl }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={imageUrl} alt={pokemon.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{pokemon.name}</div>
      </div>
      <div className="px-6 py-4">
        <input
          type="button"
          value="Get Details"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        />
      </div>
    </div>
  );
}

export default PokemonCard;
