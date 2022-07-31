import React, { useState } from "react";
import ProductsShowcase from "../components/ProductsShowcase/ProductsShowcase";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from "../assets/1.avif"
import img2 from "../assets/2.avif"
import img3 from "../assets/3.avif"

export default function Home() {
  const [categories, setCategories] = useState([
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ])

  return (
    <div>
      <Carousel className="carousel" showStatus={false} autoPlay={true} interval={1500} infiniteLoop={true} showThumbs={false} stopOnHover={true}>
                <div>
                    <img className="carousel-img" src={img1} />
                </div>
                <div>
                    <img className="carousel-img" src={img2} />
                </div>
                <div>
                    <img className="carousel-img" src={img3} />
                </div>
            </Carousel>
      {categories.map(category => {
        return <ProductsShowcase key={category} category={category} />
      })}
    </div>
  );
}
