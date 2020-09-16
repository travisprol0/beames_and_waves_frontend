import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ProductContainer from "./Containers/ProductContainer"
import CartContainer from "./Containers/CartContainer"
import LightingContainer from "./Containers/LightingContainer"
import SoundContainer from "./Containers/SoundContainer"
import ProductShow from './Components/ProductShow'
import Home from "./Containers/Home"
import NavBar from "./Components/NavBar/NavBar"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar navBarFilter={this.navBarFilter} />
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/products"
            render={() => {
              return <ProductContainer />
            }}
          />
          <Route
            exact
            path="/products/lighting"
            render={() => {
              return <LightingContainer />
            }}
          />
          <Route
            exact
            path="/products/sound"
            render={() => {
              return <SoundContainer />
            }}
          />
          <Route
            exact
            path="/products/:id"
            render={() => {
              return <ProductShow />
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
