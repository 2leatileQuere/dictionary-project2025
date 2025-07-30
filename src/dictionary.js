import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function search() {
    const apiKey = "314t6060bfcoe7ed3da1e87a97833d3d";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios
      .get(apiUrl)
      .then(handleDictionaryResponse)
      .catch(() => {
        setResults(null);
        alert("Word not found. Try another one.");
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="dictionary container">
        <section className="search-section">
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
              placeholder="Type a word like dream, sunset, joy..."
            />
            <button type="submit">Search</button>
          </form>
        </section>

        {results && <Results results={results} />}

        {/* Optional: <Photos photos={photos} /> */}
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
