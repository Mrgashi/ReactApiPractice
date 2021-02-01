import React, { useState, useEffect } from "react";
import Header from "./BreakingBad/Header";
import axios from "axios";
import CharacterGrid from "./BreakingBad/Charachters/CharacterGrid";
import Search from "./BreakingBad/Search";

const BreakingBad = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default BreakingBad;
