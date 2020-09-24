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
// import Home from "./Containers/Home"
import NavBar from "./Components/NavBar/NavBar"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
const BASE_URL = "http://localhost:3000/"
class App extends React.Component {
  state = {
    products: [],
    filteredProducts: [],
    priceFiltered: [],
    carts: [],
  }

  componentDidMount() {
    fetch(BASE_URL + "products")
      .then((response) => response.json())
      .then((products) => this.setState({ products: products }))

    fetch(BASE_URL + "carts")
      .then((response) => response.json())
      .then((carts) => this.setState({ carts: carts }))
  }

  searchBarHandler = (searchTerm) => {
    let filteredProducts = this.state.products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.brand.toLowerCase().includes(searchTerm)
    )
    this.setState({ filteredProducts: filteredProducts })
  }

  priceFilter = (e) => {
    if (e.target.value === "Less Than $50") {
      let filteredProducts = this.state.products.filter((product) => product.price < 50)
      filteredProducts.forEach((product) => this.setState({filteredProducts: [...this.state.filteredProducts, product]}))
    }
  }

  getCarts = (carts) => {
    return carts
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar searchBarHandler={this.searchBarHandler} />
          <Route
            exact
            path="/"
            render={(props) => (
              <ProductContainer
                {...props}
                products={this.state.products}
                clickHandler={this.priceFilter}
              />
            )}
          />
          <Route
            exact
            path="/equipment"
            render={(props) => (
              <ProductContainer
                {...props}
                products={this.state.products}
                clickHandler={this.priceFilter}
              />
            )}
          />
          <Route
            exact
            path="/equipment/lighting"
            render={(props) => (
              <LightingContainer
                {...props}
                products={this.state.products}
                clickHandler={this.priceFilter}
              />
            )}
          />
          <Route
            exact
            path="/equipment/sound"
            render={(props) => (
              <SoundContainer
                {...props}
                products={this.state.products}
                clickHandler={this.priceFilter}
              />
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
              <AccountContainer
                {...props}
                products={this.state.products}
                carts={this.state.carts}
              />
            )}
          />
          <Route
            exact
            path="/cart"
            render={(props) => (
              <CartContainer
                {...props}
                products={this.state.products}
                getCarts={this.getCarts}
              />
            )}
          />
          <Route exact path="/list-item" component={FormContainer} />
        </div>
      </Router>
    )
  }
}

export default App
