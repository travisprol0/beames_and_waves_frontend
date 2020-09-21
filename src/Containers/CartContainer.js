import React from "react"
import Cart from "../Components/Cart"

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
    let filteredCart = carts.filter((cart) => cart.user_id === 26)
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
      </div>
    )
  }
}

export default CartContainer
