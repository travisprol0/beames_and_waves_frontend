import React from "react"

const ItemsBought = (props) => {

const product = props.products.find((product) => product.id === props.cart.product_id)
console.log(product)
    return (
      <div className="items-bought">
        <img className="boutImage" src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <h3>Quantity: {product.quantity}</h3>
        <h3 className="sellingPrice">${product.price}</h3>
        {/* <button onClick={this.clickHandler}>Delete</button> */}
      </div>
    // <h5>purchased item card</h5>
    )
  
}

export default ItemsBought
