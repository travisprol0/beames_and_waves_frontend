import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ProductContainer from './Containers/ProductContainer'
import CartContainer from './Containers/CartContainer'
import Home from './Containers/Home'
import NavBar from './Components/NavBar/NavBar'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const  BASE_URL = "http://localhost:3000/"
class App extends React.Component {
  state = {
    products: [],
    filteredProducts: [],
    category: ""
  }

  componentDidMount(){
    fetch(BASE_URL + "products")
    .then((response)=> response.json())
    .then((products)=> this.setState({products: products, filteredProducts: products}))
  }

  navBarFilter = (category) => {
    this.setState({category: category})
    if (category === "Lighting Equipment"){
      let filteredProducts = this.state.products.filter((product)=> product.category === "lighting")
      this.setState({filteredProducts: filteredProducts})
    }
    else if (category === "Sound Equipment"){
      let filteredProducts = this.state.products.filter((product)=> product.category === "sound")
      this.setState({filteredProducts: filteredProducts})
    } else {
      this.setState({filteredProducts: this.state.products})
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar navBarFilter={this.navBarFilter} />
          <Route exact path="/" component={Home} />
          <Route
            exact path="/products"
            render={() => {
              return <ProductContainer products={this.state.filteredProducts} category={this.state.category} />
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