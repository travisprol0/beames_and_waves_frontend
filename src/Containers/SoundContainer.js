import React from "react"
import Product from "../Components/Product"

const SoundContainer =(props) => {
  let  soundProducts = props.products.filter((product) => product.category === "sound")
  let products = soundProducts.map((product) => (<Product key={product.id} product={product} />))
    return products
}

export default SoundContainer