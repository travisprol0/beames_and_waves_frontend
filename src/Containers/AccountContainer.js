import React, { useState } from "react"
import ItemsSelling from "../Components/ItemsSelling"

class AccountContainer extends React.Component {

  state = {
    products: []
  }

  // const [myProducts, setMyProducts] = useState({props})
  // let itemsSelling = props.products.filter((product) => product.user_id === 1)
  // let products = itemsSelling.map((product) => (
  //   <ItemsSelling key={product.id} product={product} />
  // ))

  // // function setMyProducts
  // // function setState() {
  // //   setMyProducts(props.products.filter((product) => product.user_id === 1))
  // // }

  // return (
  //   <div>
  //     <h1>Items I'm Selling</h1>
  //     {/* {myProducts} */}
  //   </div>
  // )

  // componentDidUpdate() {
  //   console.log("products array:", this.props.products)
  //   this.filterProducts()
  // }

  // filterProducts = () => {
  //   let filteredProducts = this.props.products.filter((product) => product.user_id === 1)
  //   // this.setState({products: filteredProducts})

  // }

  render() {
    const filteredProducts = this.props.products.filter((product) => product.user_id === 1)
    const cards = filteredProducts.map((product) => <ItemsSelling key={product.id} product={product} /> )
    console.log(filteredProducts)
    return (
      <div>
        <h1>Items I'm Selling</h1>
        {cards}
      </div>
    )
  }
}

export default AccountContainer
