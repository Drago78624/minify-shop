import React, { useState } from "react";
import ProductsShowcase from "../components/ProductsShowcase/ProductsShowcase";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  const [categories, setCategories] = useState([
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ])

  return (
    <div>
      <Carousel>
                <div>
                    <img src="../assets/1.avif" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="../assets/2.avif" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="../assets/3.avif" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
      {categories.map(category => {
        return <ProductsShowcase key={category} category={category} />
      })}
    </div>
  );
}
