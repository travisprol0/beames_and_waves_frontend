import React from "react"
import Product from "../Components/Product"

const LightingContainer =(props) => {
  let  lightingProducts = props.products.filter((product) => product.category === "lighting")
  let products = lightingProducts.map((product) => (<Product key={product.id} product={product} />))
    return products
}

export default LightingContainer
