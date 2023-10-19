import React, { useState, useEffect } from "react";
import axios from "axios";

export const swapiGetter = (id) =>
  axios
    .get(`https://swapi.dev/api/people/${id}/`)
    .then((res) => res.data)
    .catch((err) => {
      console.error(err);
      throw err;
    });

const CharacterDetails = () => {
  const [characterId, setCharacterId] = useState(1);
  const [characterDetails, setCharacterDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCharacterDetails = async () => {
    setLoading(true);
    try {
      const result = await swapiGetter(characterId);
      setCharacterDetails(result);
    } catch (error) {
      console.error("Error fetching character details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Star Wars Character Details</h1>
      <label>
        Enter character ID:
        <input
          type="number"
          value={characterId}
          onChange={(e) => setCharacterId(e.target.value)}
        />
      </label>
      <button onClick={fetchCharacterDetails}>Fetch Details</button>

      {loading && <p>Loading...</p>}

      {characterDetails && (
        <div>
          <h2>{characterDetails.name}</h2>
          <p>Height: {characterDetails.height}</p>
          <p>Mass: {characterDetails.mass}</p>
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;

// import axios from "axios";

// // get a star wars person by id and return their name
// const swapiGetter = (id) =>
//   axios
//     .get(`https://swapi.dev/api/people/${id}/`)
//     .then((res) => res.data)
//     .catch((err) => console.error(err));

// export default swapiGetter;
