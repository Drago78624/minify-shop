import React, { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsShowcase.css";
import { Link } from "react-router-dom";

export default function ProductsShowcase({ category }) {
  const [products, setProducts] = useState([]);

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
