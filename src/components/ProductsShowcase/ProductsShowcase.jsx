import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import "./ProductsShowcase.css"

export default function ProductsShowcase() {
  const [products, setProducts] = useState([])

  console.log(products)

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products?limit=5")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const displayProducts = products.map(product => {
    return <ProductCard
              title={product.title}
              price={product.price}
          />
  })

  return (
    <div>
      <h3 className='category-heading'>Category</h3>
      <div className="products-container">
        {products.map(product => {
    return <ProductCard
              key={product.id}
              img={product.image}
              title={product.title}
              price={product.price}
          />
  })}
      </div>
    </div>
  )
}
