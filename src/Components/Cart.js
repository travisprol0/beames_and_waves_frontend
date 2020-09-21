import React from "react"

class Cart extends React.Component {
  state = {
    product: [],
  }

  componentDidMount() {
    fetch(`http://localhost:3000/products/${this.props.cart.product_id}`)
      .then((response) => response.json())
      .then((product) => this.setState({product: product}))
  }

  render() {
    return (
      <>
        <h1>{this.state.product.title}</h1>
      </>
    )
  }
}

export default Cart
