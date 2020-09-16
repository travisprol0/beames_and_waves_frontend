import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import LightingContainer from './Containers/LightingContainer'
import CartContainer from "./Containers/CartContainer"

import StoreContainer from './Containers/StoreContainer'
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
          <StoreContainer />
          <Route exact path="/" component={Home} />
          <Route exact path="/products/lighting" component={LightingContainer} />
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
