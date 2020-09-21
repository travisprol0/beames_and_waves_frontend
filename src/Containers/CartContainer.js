import React from "react"
import Cart from "../Components/Cart"
import {PayPalButton} from 'react-paypal-button-v2'

class CartContainer extends React.Component {
  state = {
    cart: [],
    total: 0,
  }
  componentDidMount() {
    fetch("http://localhost:3000/carts")
      .then((response) => response.json())
      .then((carts) => this.filterCart(carts))
  }

  filterCart = (carts) => {
    let filteredUsers = carts.filter((cart) => cart.user_id === 26 )
    let filteredCart = filteredUsers.filter((cart) => !cart.sold)
    this.setState({ cart: filteredCart })
  }

  mapCart = () => {
    return this.state.cart.map((cart) => (
      <Cart key={cart.id} cart={cart} getTotal={this.getTotal} />
    ))
  }

  getTotal = (price) => {
    let old = parseInt(this.state.total)
    this.setState({ total: old + parseInt(price) })
  }

  render() {
    return (
      <div>
        {this.mapCart()}
        <h1>Total: ${this.state.total}</h1>
        <PayPalButton
        amount={this.state.total}
        
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
          // OPTIONAL: Call your server to save the transaction
          // return fetch("/paypal-transaction-complete", {
          //   method: "post",
          //   body: JSON.stringify({
          //     orderID: data.orderID
          //   })
          // });
        }}
      />
      </div>
    )
  }
}

export default CartContainer
