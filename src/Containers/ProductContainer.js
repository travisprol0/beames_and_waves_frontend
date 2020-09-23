import React from "react"
import Product from "../Components/Product"
import Filter from "../Components/Filter"

const ProductContainer = (props) => {
  let products = props.products.map((product) => (
    <Product key={product.id} product={product} />
  ))
  return (
    <div>
      <Filter products={props.products} />
      {products}
    </div>
    )
}

export default ProductContainer
