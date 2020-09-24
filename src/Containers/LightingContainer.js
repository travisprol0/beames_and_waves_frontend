import React from "react"
import Product from "../Components/Product"
import Filter from "../Components/Filter"

const LightingContainer =(props) => {
  let  lightingProducts = props.products.filter((product) => product.category === "lighting")
  let products = lightingProducts.map((product) => (<Product key={product.id} product={product} />))
  return (
    <div className="product-wrapper">
      <div className="product-container">{products}</div>
      <div className="filter-container">
        <Filter clickHandler={props.clickHandler} />
      </div>
    </div>
  )
}

export default LightingContainer
