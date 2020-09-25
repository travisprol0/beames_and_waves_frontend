import React from "react"
import Cart from "../Components/Cart"
import { PayPalButton } from "react-paypal-button-v2"

class CartContainer extends React.Component {
  state = {
    cart: [],
    total: 0,
  }
  componentDidMount() {
    this.fetchCarts()
  }

  fetchCarts = () => {
    fetch("http://localhost:3000/carts")
      .then((response) => response.json())
      .then((carts) => this.filterCart(carts))
  }

  filterCart = (carts) => {
    this.props.getCarts(carts)
    let filteredUsers = carts.filter((cart) => cart.user_id === 1)
    let filteredCart = filteredUsers.filter((cart) => !cart.sold)
    this.setState({ cart: filteredCart })
  }

  mapCart = () => {
    return this.state.cart.map((cart) => (
      <Cart
        key={cart.id}
        cart={cart}
        getTotal={this.getTotal}
        updateTotal={this.updateTotal}
      />
    ))
  }

  getTotal = (price) => {
    let old = parseInt(this.state.total)
    this.setState({ total: old + parseInt(price) })
  }

  updateTotal = (price) => {
    let itemPrice = parseInt(price)
    this.setState({ total: this.state.total - itemPrice })
  }

  fetchCartsSold = () => {
    let date = Date().toLocaleString()
    this.state.cart.forEach((item) =>
      fetch(`http://localhost:3000/carts/${item.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          sold: true, 
          date: date
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
    )
    this.fetchProductQuantity()
  }

  fetchProductQuantity = () => {
    this.state.cart.forEach((item) =>
      fetch(`http://localhost:3000/products/${item.product_id}`, {
        method: "PATCH",
        body: JSON.stringify({
          quantity: item.quantityAvailable - item.quantity,
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
    )
    this.setState({ cart: [], total: 0 })
    this.mapCart()
  }

  render() {
    return (
      <div className="cart">
        <h1 className="cart-div-title">My Cart</h1>
        {this.mapCart()}
        <div className="payment">
          <div className="paypal-buttons">
            <PayPalButton
              amount={this.state.total}
              onSuccess={(details, data) => {
                alert(
                  "Transaction completed by " + details.payer.name.given_name
                )
                this.fetchCartsSold()
              }}
            />
          </div>
          <div className="cart-total">
            <h5>Total: ${this.state.total}</h5>
          </div>

        </div>
      </div>
    )
  }
}

export default CartContainer
