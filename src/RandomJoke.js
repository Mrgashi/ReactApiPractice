import React, { useState, useEffect } from "react";
const RandomJoke = () => {
  const [data, setData] = useState("");
  const [update, setUpdate] = useState(false);

  const fetchURL =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit";
  const getData = () => fetch(`${fetchURL}`).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setData(data));
  }, [update]);

  return (
    <div className="container">
      <h3>
        {data.setup}
        {data.joke}
      </h3>
      <h3>{data.delivery}</h3>
      <button onClick={setUpdate} className="btn">
        New Joke!
      </button>
    </div>
  );
};

export default RandomJoke;
