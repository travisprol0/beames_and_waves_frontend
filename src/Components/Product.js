import React from "react"
import {Link} from 'react-router-dom'

const Product = (props) => {
  return (

    <div className="productCard">
      <img src={props.product.image} alt={props.product.title} className="productCardImage" />
      <p className="cardTitle">{props.product.title}</p>
      <p className="cardPrice">${props.product.price}</p>
      <p className="cardQuantity">Quantity: {props.product.quantity}</p>
      <Link to={{pathname: `/products/${props.product.id}`, state: props}}  >
        <button type="button">View Item</button>
      </Link>

    </div>
  )
}

export default Product
