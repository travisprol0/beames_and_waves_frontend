import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ProductContainer from './Containers/ProductContainer'
import CartContainer from './Containers/CartContainer'
import Home from './Containers/Home'
import NavBar from './Components/NavBar/NavBar'
import "./App.css"

const  BASE_URL = "http://localhost:3000/"
class App extends React.Component {
  state = {
    products: []
  }

  componentDidMount(){
    fetch(BASE_URL + "products")
    .then((response)=> response.json())
    .then((products)=> this.setState({products: products}))
  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route
            path="/products"
            render={() => {
              return <ProductContainer products={this.state.products} />
            }}
          />
          <Route
            path="/cart"
            render={() => {
              return <CartContainer />
            }}
          />
        </div>
      </Router>
    )
  }
}

export default App