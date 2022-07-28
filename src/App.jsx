import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route paht="/products" element={<Products />} />
            <Route path="products/product" element={<Product />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
