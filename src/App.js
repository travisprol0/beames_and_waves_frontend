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

class App extends React.Component {

state = {
  test: "test"
}
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar navBarFilter={this.navBarFilter} />
          <Route path="/" render={props =>(<Home {...props} prop={this.state}/>)}/>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/equipment" component={ProductContainer} />
          <Route exact path="/equipment/lighting" component={LightingContainer} />
          <Route exact path="/equipment/sound" component={SoundContainer} />
          <Route path="/products/:id" component={ProductShow} />
          <Route exact path="/cart" component={CartContainer} />
        </div>
      </Router>
    )
  }
}

export default App
