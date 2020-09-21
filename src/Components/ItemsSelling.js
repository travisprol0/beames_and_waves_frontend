import React from "react"

class ItemsSelling extends React.Component {
  render() {
    let product = this.props.product
    return (
      <div>
        <h1>{product.title}</h1>
      </div>
    )
  }
}

export default ItemsSelling
