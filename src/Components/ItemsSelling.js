import React from "react"

class ItemsSelling extends React.Component {
  state = { deleted: false }

  clickHandler = () => {
    const deleted = this.state.deleted
    this.setState({ deleted: !deleted })
    this.deleteProduct()
  }

  deleteProduct = (e) => {
    let id = this.props.product.id
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    })
  }

  render() {
    let product = this.props.product
    return (
      <div className={this.state.deleted ? "deleted" : "visible"}>
        <img className="selling-image" src={product.image} alt={product.title} />
        <h5 className="selling-title">{product.title}</h5>
        <h5 className="selling-price">${product.price}</h5>
        <div className="selling-delete-div">
          <button className="selling-delete" onClick={this.clickHandler}>Delete</button>
        </div>
        <h5 className="selling-quantity">Quantity: {product.quantity}</h5>
      </div>
    )
  }
}

export default ItemsSelling
