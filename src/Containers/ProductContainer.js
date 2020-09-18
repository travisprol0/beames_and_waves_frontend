import React from "react"
import Product from "../Components/Product"


const ProductContainer =(props) => {
  let products = props.products.map((product) => (<Product key={product.id} product={product} />))
    return products
}

export default ProductContainer