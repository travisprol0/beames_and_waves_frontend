import React from "react"

class Cart extends React.Component {


    componentDidMount(){
        fetch('http://localhost:3000/products')
    }
    render(){

        return <h1>Test</h1>
    }


      
  
}

export default Cart
