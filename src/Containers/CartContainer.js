import React from "react"
import Cart from "../Components/Cart"

class CartContainer extends React.Component {
  state = {
    cart: []
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
    return this.state.cart.map((cart) => <Cart key={cart.id} cart={cart} />)
  }

  render() {
    return this.mapCart()
  }
}

export default CartContainer
