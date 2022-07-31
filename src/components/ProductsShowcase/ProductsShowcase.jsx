import React, { useEffect, useState } from "react";
import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import MoonLoader from "react-spinners/MoonLoader";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsShowcase.css";
import { Link } from "react-router-dom";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "var(--secondary)",
};

export default function ProductsShowcase({ category }) {
  const [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const displayProducts = products.map((product) => {
    return <ProductCard title={product.title} price={product.price} />;
  });

  return (
    <div>
      <h3 className="category-heading">{category}</h3>
      <div className="products-container">
        {products.map((product) => {
          return (
              <ProductCard
                key={product.id}
                id={product.id}
                img={product.image}
                title={product.title}
                price={product.price}
              />
          );
        })}
      
      </div>
    </div>
  );
}
