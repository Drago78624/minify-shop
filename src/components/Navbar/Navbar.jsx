import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"
import {FaHeart} from "react-icons/fa"
import {FaHome} from "react-icons/fa"
import {FaShoppingBag} from "react-icons/fa"
import CartContext from "../../CartContext";
import FavoritesContext from "../../FavoritesContext";

export default function Navbar() {
  const {items} = useContext(CartContext)
  const {favItems} = useContext(FavoritesContext)
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <h2 className="logo">Minify</h2>
        <ul className="links">
          <li>
            <NavLink 
              className={({isActive})=>isActive ? "link active" : "link"} 
              to="/"

            >
              <span className="home nav-link">Home</span>
              <span className="icon"><FaHome /></span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/products"
              className={({isActive})=>isActive ? "action active" : "action"} 
            >
              <span className="products nav-link">Products</span>
              <span className="icon"><FaShoppingBag /></span>
            </NavLink>
          </li>
        </ul>
        <ul className="actions">
          <li>
            <NavLink className="action" to="/favorites">
              <FaHeart />
              <span>{favItems.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="action" to="/cart">
              <FaShoppingCart />
              <span>{items.length}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
