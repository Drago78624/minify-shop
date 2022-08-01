import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard/ProductCard";
import { BsSearch } from "react-icons/bs";

export default function Products() {
  const [category, setCategory] = useState("")
  const [products, setProducts] = useState([])
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
    ]

    useEffect(()=>{
      fetch(`https://fakestoreapi.com/products${category ? `/category/${category}` : ""}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, [category])

    function changeCategory(category){
      setCategory(category)
    }

  return (
    <div className="categories-products-container">
      <div className="categories-drawer">
        <h1 className="categories-heading">Categories</h1>
      <button className='category-btn all-btn' onClick={()=>changeCategory("")}>All</button>
        {categories.map(category => {
          return <button className='category-btn' onClick={()=>changeCategory(category)} >{category}</button>
        })}
      </div>
      <div>
        <div className="searchbar-container">
          <div className="searchbar">
            <input type="text" className="search" placeholder="Search Products" />
            <div className="search-icon">
              <BsSearch />
            </div>
          </div>
        </div>
      <div className="categories-products">
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
    </div>
  );
}
