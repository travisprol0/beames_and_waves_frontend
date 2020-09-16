import React from "react"
import Product from "../Components/Product"

const BASE_URL = "http://localhost:3000/"
class  ProductContainer extends React.Component {
    state = {
        products: [],
      }
    componentDidMount() {
        fetch(BASE_URL + "products")
          .then((response) => response.json())
          .then((products) =>
            this.setState({ products: products, filteredProducts: products })
          )
      }

    render(){

        let products = this.state.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            clickHandler={this.props.clickHandler}
          />
        ))
        return <div className="productContainer">{products}</div>
    }
}

export default ProductContainer
