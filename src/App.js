import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ProductContainer from "./Containers/ProductContainer"
import CartContainer from "./Containers/CartContainer"
import LightingContainer from "./Containers/LightingContainer"
import SoundContainer from "./Containers/SoundContainer"
import ProductShow from "./Components/ProductShow"
import Home from "./Containers/Home"
import NavBar from "./Components/NavBar/NavBar"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
const BASE_URL = "http://localhost:3000/"
class App extends React.Component {

state = {
  products: []
}

componentDidMount() {
  fetch(BASE_URL + "products")
    .then((response) => response.json())
    .then((products) =>
      this.setState({ products: products })
    )
}
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar navBarFilter={this.navBarFilter} />
          <Route exact path="/" component={Home} />
          <Route exact path="/equipment" render={props =>(<ProductContainer {...props} products={this.state.products}/>)}/>
          <Route exact path="/equipment/lighting" render={props =>(<LightingContainer {...props} products={this.state.products}/>)}/>
          <Route exact path="/equipment/sound" render={props =>(<SoundContainer {...props} products={this.state.products}/>)} />
          <Route path="/products/:id" render={props =>(<ProductShow {...props} products={this.state.products}/>)} />
          <Route exact path="/cart" render={props =>(<CartContainer {...props} products={this.state.products}/>)} />
        </div>
      </Router>
    )
  }
}

export default App
