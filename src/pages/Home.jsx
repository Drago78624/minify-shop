import React, { useState } from "react";
import ProductsShowcase from "../components/ProductsShowcase/ProductsShowcase";

export default function Home() {
  const [categories, setCategories] = useState([
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ])

  return (
    <div>
      {categories.map(category => {
        return <ProductsShowcase key={category} category={category} />
      })}
    </div>
  );
}
