import React from "react"

const ItemsBought = (props) => {

const product = props.products.find((product) => product.id === props.cart.product_id)
    return (
      <div className="items-bought">
        <img className="bought-image" src={product.image} alt={product.title} />
        <h5 className="bought-title">{product.title}</h5>
        <h5 className="bought-price">${product.price}</h5>
        <h5 className="bought-date">Date: {props.cart.date.slice(4, 15)}</h5>
        <h5 className="bought-quantity">Quantity: {props.cart.quantity}</h5>
      </div>
    )
  
}

export default ItemsBought
