import React from "react"
import Product from "../Components/Product"

const BASE_URL = "http://localhost:3000/"
class LightingContainer extends React.Component {
  state = {
    products: [],
  }
  componentDidMount() {
    fetch(BASE_URL + "products")
      .then((response) => response.json())
      .then((products) => this.filterLighting(products))
  }

  filterLighting = (products) => {
    let  lightingProducts = products.filter((product) => product.category === "lighting")
    this.setState({products: lightingProducts})
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

export default LightingContainer
