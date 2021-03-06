import React from "react"
import ItemsSelling from "../Components/ItemsSelling"
import ItemsBought from "../Components/ItemsBought"

const AccountContainer = (props) => {
  const filteredProducts = props.products.filter(
    (product) => product.user_id === 1
  )
  const sellingCards = filteredProducts.map((product) => (
    <ItemsSelling key={product.id} product={product} />
  ))

  const filterUserCarts = props.carts.filter((cart) => (cart.user_id = 1))
  const filterSoldCarts = filterUserCarts.filter((cart) => cart.sold)
  const boughtCards = filterSoldCarts.map((cart) => (
    <ItemsBought key={cart.id} cart={cart} products={props.products} />
  ))

  return (
    <div>
      <h1 className="account-headers">Items I'm Selling</h1>
      {sellingCards}
      <br></br>
      <br></br>
      <br></br>
      <h1 className="account-headers">Purchased Items</h1>
      {boughtCards}
    </div>
  )
}

export default AccountContainer
