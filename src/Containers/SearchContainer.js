import React from "react"
import Product from "../Components/Product"

const SearchContainer = (props) => {
  let products = props.products.map((product) => (
    <Product key={product.id} product={product} />
  ))
  if (products.length === 0) {
    return <h1>No products found!</h1>
  } else {
    return products
  }
}

export default SearchContainer
