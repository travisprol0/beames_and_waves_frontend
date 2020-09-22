import React, { useState } from "react"
import ItemsSelling from "../Components/ItemsSelling"

class AccountContainer extends React.Component {

  state = {
    products: []
  }

  render() {
    const filteredProducts = this.props.products.filter((product) => product.user_id === 1)
    const sellingCards = filteredProducts.map((product) => <ItemsSelling key={product.id} product={product} /> )
    
    return (
      <div>
        <h1>Items I'm Selling</h1>
        {sellingCards}
      </div>
    )
  }
}

export default AccountContainer
