import React from "react"

class Cart extends React.Component {
  state = {
    products: [],
  }

//   componentDidMount(){
// }
  filterProducts = () => {
        let idk = this.props.products.filter(
              (product) => product.id === this.props.cart.product_id
            )
            this.setState({product: idk})
            console.log(this.state)
          }
        
        render() {
            // {this.setState({products: this.props.products})}
            return (
                <>
        {this.filterProducts()}
        <h1>Test</h1>
      </>
    )
  }
}

export default Cart
