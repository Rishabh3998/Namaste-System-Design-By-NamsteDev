import { useState } from "react";
import "./App.css";
import { LANG } from "./utils/langConstant";

function App() {
  const [language, setLanguage] = useState("english");

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <>
      <header
        style={{ position: "absolute", top: "0", right: "0", padding: "1rem" }}
      >
        <select
          name="select language"
          id="language"
          value={language}
          onChange={handleChange}
          style={{ padding: "0.5rem 1.5rem" }}
        >
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>
          <option value="russian">Russian</option>
        </select>
      </header>
      <h1>Multi Lang Support</h1>
      <p>{LANG[language].description}</p>
    </>
  );
}

export default App;
