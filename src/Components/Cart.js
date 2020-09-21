import React from "react"

class Cart extends React.Component {
  state = {
    product: [],
    price: 0,
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

  render() {
    let product = this.state.product
    return (
      <div className="cartCard">
        <img className="cartImage" src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <h3>Quantity: {this.props.cart.quantity}</h3>
        <h3 className="cartPrice">
          ${product.price * this.props.cart.quantity}
        </h3>
      </div>
    )
  }
}

export default Cart
