import React from "react"

const Product = (props) => {
  return (
    <div className="productCard">
      <img src={props.product.image} alt={props.product.title} className="productCardImage" />
      <h1>{props.product.title}</h1>
      <h3>${props.product.price}</h3>
    </div>
  )
}

export default Product
