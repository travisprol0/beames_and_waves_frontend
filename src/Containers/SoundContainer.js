import React from "react"
import Product from "../Components/Product"

const BASE_URL = "http://localhost:3000/"
class SoundContainer extends React.Component {
  state = {
    products: [],
  }
  componentDidMount() {
    fetch(BASE_URL + "products")
      .then((response) => response.json())
      .then((products) => this.filterSound(products))
  }

  filterSound = (products) => {
    let  soundProducts = products.filter((product) => product.category === "sound")
    this.setState({products: soundProducts})
  }
  render() {
    let products = this.state.products.map((product) => (
      <Product
        key={product.id}
        product={product}
      />
    ))
    return <div className="productContainer">{products}</div>

  }
}

export default SoundContainer
