import React from "react"
import Product from "../Components/Product"
import Filter from "../Components/Filter"

const ProductContainer = (props) => {
  let products = props.products.map((product) => (
    <Product key={product.id} product={product} />
  ))
  // const allProductBrands = props.products.map((product) => product.brand)
    // const productBrands = [...new Set(allProductBrands)]
  return (
    <div className="product-wrapper">
      <div className="product-container">{products}</div>
      <div className="filter-container">
        <Filter clickHandler={props.clickHandler} />
      </div>
    </div>
  )
}

export default ProductContainer
