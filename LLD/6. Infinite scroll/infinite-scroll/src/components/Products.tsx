/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Card from "./Card";

const Products = () => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [skip, setSkip] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const limit = 10;

  const fetchProducts = async () => {
    if (loading || !hasMore) return;
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const result = await response.json();
      if (result.products?.length > 0) {
        setData((prev) => [...prev, ...result.products]);
      } else {
        setHasMore(false);
      }
    } catch (err: any) {
      setError(err.message || "Failed to fetch products.");
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.scrollY + window.innerHeight >=
      document.body.scrollHeight - 100
    ) {
      setSkip((prev) => prev + limit);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [skip]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "10px",
      }}
    >
      {data.map((product: any) => (
        <Card key={product.id} product={product} />
      ))}
      {loading && <h1>Loading...</h1>}
      {!hasMore && <h1>No more products to show.</h1>}
    </div>
  );
};

export default Products;
