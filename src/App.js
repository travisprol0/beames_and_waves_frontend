import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ProductContainer from "./Containers/ProductContainer"
import CartContainer from "./Containers/CartContainer"
import LightingContainer from "./Containers/LightingContainer"
import SoundContainer from "./Containers/SoundContainer"
import ProductShow from "./Components/ProductShow"
import FormContainer from "./Containers/FormContainer"
import SearchContainer from "./Containers/SearchContainer"
import AccountContainer from "./Containers/AccountContainer"
import Home from "./Containers/Home"
import NavBar from "./Components/NavBar/NavBar"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
const BASE_URL = "http://localhost:3000/"
class App extends React.Component {
  state = {
    products: [],
    filteredProducts: [],
    myProducts: [],
  }

  searchBarHandler = (searchTerm) => {
    let filteredProducts = this.state.products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    )
    this.setState({ filteredProducts: filteredProducts })
  }

  componentDidMount() {
    fetch(BASE_URL + "products")
      .then((response) => response.json())
      .then((products) => this.setState({ products: products }))
  }

  getMyProducts = () => {
    let myProducts = this.state.products.filter(
      (product) => product.user_id === 1
    )
    this.setState({ myProducts: myProducts })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar searchBarHandler={this.searchBarHandler} />
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/equipment"
            render={(props) => (
              <ProductContainer {...props} products={this.state.products} />
            )}
          />
          <Route
            exact
            path="/equipment/lighting"
            render={(props) => (
              <LightingContainer {...props} products={this.state.products} />
            )}
          />
          <Route
            exact
            path="/equipment/sound"
            render={(props) => (
              <SoundContainer {...props} products={this.state.products} />
            )}
          />
          <Route
            path="/products/:id"
            render={(props) => (
              <ProductShow {...props} products={this.state.products} />
            )}
          />
          <Route
            path="/search"
            render={(props) => (
              <SearchContainer
                {...props}
                products={this.state.filteredProducts}
              />
            )}
          />

          <Route
            path="/account"
            render={(props) => (
              <AccountContainer {...props} products={this.state.products} />
            )}
          />
          <Route
            exact
            path="/cart"
            render={(props) => (
              <CartContainer {...props} products={this.state.products} />
            )}
          />
          <Route exact path="/list-item" component={FormContainer} />
        </div>
      </Router>
    )
  }
}

export default App
