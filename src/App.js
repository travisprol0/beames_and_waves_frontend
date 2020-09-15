import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ProductContainer from './Containers/ProductContainer'
import CartContainer from './Containers/CartContainer'
import Home from './Containers/Home'
import NavBar from './Components/NavBar/NavBar'
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route
            path="/products"
            render={() => {
              return <ProductContainer />
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