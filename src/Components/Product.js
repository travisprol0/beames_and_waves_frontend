import React from "react"
import { Link } from "react-router-dom"

const Product = (props) => {
  return (
    <div className="product-card">
      <div className="product-card-image-div">
        <img
          src={props.product.image}
          alt={props.product.title}
          className="product-card-image"
        />
      </div>
      <div className="card-title-div">
        <p className="card-title">{props.product.title}</p>
      </div>
      <div className="card-quantity-div">
        <p className="card-quantity">Quantity: {props.product.quantity}</p>
      </div>
      <div className="price-and-view-div">
        <p className="card-price">${props.product.price}</p>
        <Link to={{ pathname: `/products/${props.product.id}`, state: props }}>
          <button type="button" className="view-item-button">
            View Item
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Product
