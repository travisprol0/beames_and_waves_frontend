import React from "react"
import Product from "../Components/Product"

class ProductContainer extends React.Component{

    componentDidMount(){

        console.log(this.props)
    }
    render() {
        let products = () => this.props.products.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))
        return <div className="productContainer">{products}</div>
      }
    }

export default ProductContainer
