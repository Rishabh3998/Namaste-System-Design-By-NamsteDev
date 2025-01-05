import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

// limit = Number of products to show
// skip = to skip the prev products according to the given number
// Example: skip = 15 => skip the first 15 and then show the next limit defined
// on page 3 = id: 11 to 15 will be there (limit = 5, skip = 10)
// We need to add limit in skip on each page change, so that the prev products will get skipped.
// skip = (pageNumber) * limit => page 4 = 4 * 5 = 20 (value of skip)

const LIMIT = 10;

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState({});
  const [pages, setPages] = useState();

  const handleClick = (page) => {
    if (page === "prev") {
      setCurrentPage((prev) => prev - 1);
    } else if (page === "next") {
      setCurrentPage((prev) => prev + 1);
    } else {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=${LIMIT}&skip=${
            currentPage * LIMIT
          }`
        );
        const json = await res.json();
        setData(json);
        setPages(Math.ceil(json.total / LIMIT));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage]);

  return (
    <>
      <h1>Pagination</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {data?.products?.map((product) => {
          return (
            <div
              key={product.id}
              style={{ border: "1px solid black", margin: "1rem" }}
            >
              <img src={product.thumbnail} alt={product.title} />
              <div style={{ border: "1px solid black" }}>{product.title}</div>
            </div>
          );
        })}
      </div>
      <div>
        {currentPage !== 0 && (
          <button
            style={{ width: "3rem", height: "3rem" }}
            onClick={() => handleClick("prev")}
          >
            ◀
          </button>
        )}
        {[...Array(pages).keys()].map((page, index) => {
          return (
            <button
              key={index}
              style={{
                width: "3rem",
                height: "3rem",
                margin: "0 0.5rem",
                background: page === currentPage ? "green" : "",
                color: page === currentPage ? "white" : "",
              }}
              onClick={() => handleClick(index)}
            >
              {page + 1}
            </button>
          );
        })}
        {currentPage !== pages - 1 && (
          <button
            style={{ width: "3rem", height: "3rem" }}
            onClick={() => handleClick("next")}
          >
            ▶
          </button>
        )}
      </div>
    </>
  );
}

export default App;
