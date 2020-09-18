import React from 'react';
import Cart from '../Components/Cart'

class CartContainer extends React.Component {

    state = {
        cart: []
    }
    componentDidMount(){
        fetch("http://localhost:3000/carts")
        .then(response => response.json())
        .then(cart => this.setState({cart: cart}))
    }

    filterCart = () => {
        let filteredCart = this.state.cart.filter((cart) => cart.user_id === 26)
        return filteredCart.map((cart) => <Cart key={cart.id} cart={cart} />)
    }


    render() {

        return(
            this.filterCart()
        )
    }
}

export default CartContainer