import { useEffect, useState } from "react";

const Autocomplete = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [cache, setCache] = useState({});

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFocus = () => {
    setShowSuggestions(true);
  };

  const handleBlur = () => {
    setShowSuggestions(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      // Check if the query is already in the cache
      if (cache[query]) {
        setResult(cache[query]);
      } else {
        // If not then fetch the data
        try {
          const res = await fetch(
            `https://www.google.com/complete/search?client=firefox&q=${query}`
          );
          const data = await res.json();
          setCache({ ...cache, [query]: data[1] });
          setResult(data[1]);
        } catch (error) {
          console.error(error);
        }
      }
    };

    // Applying a debounce effect
    const timer = setTimeout(() => {
      fetchData();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [query, cache]);

  return (
    <div className="container">
      <div className="input__container">
        <input
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={query}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      {result.length !== 0 && showSuggestions && (
        <div className="suggestions__container">
          <ul className="suggestions__list">
            {result.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Autocomplete;
