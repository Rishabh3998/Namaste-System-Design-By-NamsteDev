import { useEffect, useState } from "react";

const Autocomplete = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

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
      try {
        const res = await fetch(
          `https://www.google.com/complete/search?client=firefox&q=${query}`
        );
        const data = await res.json();
        setResult(data[1]);
      } catch (error) {
        console.error(error);
      }
    };

    // Applying a debounce effect
    const timer = setTimeout(() => {
      fetchData();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

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
