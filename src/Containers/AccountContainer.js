import React from "react"
import ItemsSelling from "../Components/ItemsSelling"

const AccountContainer = (props) => {
  let itemsSelling = props.products.filter((product) => product.user_id === 26)
  let products = itemsSelling.map((product) => (
    <ItemsSelling key={product.id} product={product} />
  ))
  return (
    <div>
      <h1>Items I'm Selling</h1>
      {products}
    </div>
  )

  // componentDidMount (){
  //     console.log(this.props)
  //     let filteredProducts = this.props.products.filter((product) => console.log(product))
  //     this.setState({products: filteredProducts})
  // }

  // mapProducts = (filteredProducts) => {
  //    this
  // }

  return (
    <div>
      <h1>Items I'm Selling</h1>
      {/* {this.filterProducts()} */}
    </div>
  )
}

export default AccountContainer
