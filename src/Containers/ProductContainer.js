import React from "react"
import Product from "../Components/Product"
import Filter from "../Components/Filter"

const ProductContainer = (props) => {
  let products = props.products.map((product) => (
    <Product key={product.id} product={product} />
  ))
  return (
    <div className="product-wrapper">
      <div className="product-container">{products}</div>
      <div className="filter-container">
        <Filter products={props.products} />
      </div>
    </div>
  )
}

export default ProductContainer
