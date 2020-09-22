import React from "react"

class ItemsSelling extends React.Component {

  clickHandler = (e) => {
    let id = this.props.product.id
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
    
  }

  render() {
    let product = this.props.product
    return (
      <div className="SellingCard">
        <img className="sellingImage" src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <h3>Quantity: {product.quantity}</h3>
        <h3 className="sellingPrice">${product.price}</h3>
        <button onClick={this.clickHandler}>Delete</button>
      </div>
    )
  }
}

export default ItemsSelling
