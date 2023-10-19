"use client";
import React, { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import axios from "axios";

const ProductListingPage = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemonList = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
      return response.data.results;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemonList();
        setPokemonList(data);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  const getImageUrl = (id) => {
    const paddedId = String(id).padStart(3, "0");
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId}.png`;
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-semibold mb-8">Pokemon List</h1>
      <div
        className="product-listing grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 "
        data-testid="ProductCard"
      >
        {pokemonList.map((pokemon) => {
          const imageUrl = getImageUrl(pokemon.url.split("/")[6]);
          return (
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
              imageUrl={imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ProductListingPage;
