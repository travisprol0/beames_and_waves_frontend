import React from "react"
import Product from "../Components/Product"
import Filter from "../Components/Filter"

const SoundContainer =(props) => {
  let  soundProducts = props.products.filter((product) => product.category === "sound")
  let products = soundProducts.map((product) => (<Product key={product.id} product={product} />))
  return (
    <div className="product-wrapper">
      <div className="product-container">{products}</div>
      <div className="filter-container">
        <Filter clickHandler={props.clickHandler} />
      </div>
    </div>
  )
}

export default SoundContainer