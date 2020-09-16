import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ProductContainer from "./ProductContainer"
import LightingContainer from './LightingContainer'
import SoundContainer from './SoundContainer'
import Product from "../Components/Product"

const BASE_URL = "http://localhost:3000/"
class  StoreContainer extends React.Component {
    state = {
        products: [],
      }
    componentDidMount() {
        fetch(BASE_URL + "products")
          .then((response) => response.json())
          .then((products) =>
            this.setState({ products: products })
          )
      }

      render() {
          console.log(this.state)
        return (
          <Router>
            <div className="Store">
             
              <Route
                exact
                path="/products"
                render={() => {
                  return (
                    <ProductContainer />
                  )
                }}
              />
              
              <Route
                exact
                path="/products/sound"
                render={() => {
                  return (
                    <SoundContainer />
                  )
                }}
              />
        
            </div>
          </Router>
        )
      }
}

export default StoreContainer
