import React from "react"
import {Link} from 'react-router-dom'

const Product = (props) => {
  return (

    <div className="productCard">
      <img src={props.product.image} alt={props.product.title} className="productCardImage" />
      <p className="cardTitle">{props.product.title}</p>
      <p className="cardPrice">${props.product.price}</p>
      <Link to={{pathname: `/products/${props.product.id}`, state: props}}  >
        <button type="button">View Item</button>
      </Link>
      <Link to={`/products/${props.product.id}`}></Link>
        <button type="button">Add To Cart</button>

    </div>
  )
}

export default Product
