import React from "react"

class Cart extends React.Component {
  state = {
    product: [],
    price: 0,
    deleted: false,
  }

  componentDidMount() {
    fetch(`http://localhost:3000/products/${this.props.cart.product_id}`)
      .then((response) => response.json())
      .then((product) => this.updateState(product))
  }

  updateState = (product) => {
    this.setState({
      product: product,
      price: product.price * this.props.cart.quantity,
    })
    this.getTotal()
  }

  getTotal = () => {
    this.props.getTotal(this.state.price)
  }

  clickHandler = () => {
    const deleted = this.state.deleted
    this.setState({ deleted: !deleted, price: 0 })
    console.log(this.state.product.price)
    this.props.updateTotal(this.state.product.price * this.props.cart.quantity)
    this.deleteCart()
  }

  deleteCart = (e) => {
    let id = this.props.cart.id
    fetch(`http://localhost:3000/carts/${id}`, {
      method: "DELETE",
    })
  }

  render() {
    let product = this.state.product
    return (
      <div className={this.state.deleted ? "deleted" : "visible"}>
        <img className="cart-image" src={product.image} alt={product.title} />
        <h5 className="cart-title">{product.title}</h5>
        <h5 className="cart-price">
          ${product.price * this.props.cart.quantity}
        </h5>
        <div className="cart-delete-div">
          <button className="cart-delete" onClick={this.clickHandler}>
            Delete
          </button>
        </div>
        <h5 className="cart-quantity">Quantity: {this.props.cart.quantity}</h5>
      </div>
    )
  }
}

export default Cart
