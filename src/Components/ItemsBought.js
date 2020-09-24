import React from "react"

const ItemsBought = (props) => {

const product = props.products.find((product) => product.id === props.cart.product_id)
    return (
      <div className="items-bought">
        <img className="boutImage" src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <h3>Quantity: {props.cart.quantity}</h3>
        <h3 className="sellingPrice">${product.price}</h3>
      </div>
    )
  
}

export default ItemsBought
