import React from 'react';
import Product from '../Components/Product'

const ProductContainer = (props) => {
    // let filteredProducts = props.products.filter(product => {
    //     if (e.target.innerText === "Lighting Equipment"){
    //         let filteredProducts = this.state.products.filter((product)=> product.category === "lighting")
    //         this.setState({filteredProducts: filteredProducts})
    //       }
    //       else if (e.target.innerText === "Sound Equipment"){
    //         let filteredProducts = this.state.products.filter((product)=> product.category === "sound")
    //         this.setState({filteredProducts: filteredProducts})
    //       } else {
    //         this.setState({filteredProducts: this.state.products})
    //       }
    // })
    let products = props.products.map((product)=> <Product key={product.id} product={product} />)
    return(
        <div className="productContainer">
            {products}
        </div>
    )
}

export default ProductContainer