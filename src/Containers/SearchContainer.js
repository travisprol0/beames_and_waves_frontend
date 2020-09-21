import React from "react"
import Product from "../Components/Product"

const SearchContainer = (props) => {
  let products = props.products.map((product) => (
    <Product key={product.id} product={product} />
  ))
  return products
}

export default SearchContainer
