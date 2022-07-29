import React from 'react'
import { Link, useParams } from 'react-router-dom';
import SingleProduct from '../components/SingleProduct/SingleProduct';

export default function Product() {
  const { productId } = useParams();
  return (
    <SingleProduct productId={productId} />
  )
}
