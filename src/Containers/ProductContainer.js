import React from "react"
import Product from "../Components/Product"
import Filter from "../Components/Filter"
const BASE_URL = "http://localhost:3000/"
// const ProductContainer = (props) => {
//   let products = props.products.map((product) => (
//     <Product key={product.id} product={product} />
//   ))
//   // const allProductBrands = props.products.map((product) => product.brand)
//     // const productBrands = [...new Set(allProductBrands)]
//   return (
//     <div className="product-wrapper">
//       <div className="product-container">{products}</div>
//       <div className="filter-container">
//         <Filter clickHandler={props.clickHandler} />
//       </div>
//     </div>
//   )
// }

// export default ProductContainer

class ProductContainer extends React.Component {
  // let products = props.products.map((product) => (
  //   <Product key={product.id} product={product} />
  // ))
  state = { products: [], filteredProducts: [] }

  componentDidMount() {
    fetch(BASE_URL + "products")
      .then((response) => response.json())
      .then((products) =>
        this.setState({ products: products, filteredProducts: products })
      )
  }
  mapProducts = () => {
    return this.state.filteredProducts.map((product) => (
      <Product key={product.id} product={product} />
    ))
  }

  categorySort = (category) => {
    let filteredProducts = this.state.products.filter(
      (product) => product.category === category
    )
    this.setState({ filteredProducts: filteredProducts })
  }

  priceNameSort = (condition) => {
    if (condition === "low to high") {
      let newFiltered = this.state.filteredProducts.sort(
        (a, b) => a.price - b.price
      )
      this.setState({ filteredProducts: newFiltered })
    }
    if (condition === "high to low") {
      let newFiltered = this.state.filteredProducts.sort(
        (a, b) => b.price - a.price
      )
      this.setState({ filteredProducts: newFiltered })
    }
    if (condition === "ascending") {
      let newFiltered = this.state.filteredProducts.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
        return 0
      })
      this.setState({ filteredProducts: newFiltered })
    }
    if (condition === "descending") {
      let newFiltered = this.state.filteredProducts.sort((a, b) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) return -1
        if (a.title.toLowerCase() < b.title.toLowerCase()) return 1
        return 0
      })
      this.setState({ filteredProducts: newFiltered })
    }
  }

  priceFilter = (e) => {
    let newArray = []
    console.log(e.target.value)
    if (e.target.value === "Less Than $50") {
      let filteredProducts = this.state.products.filter(
        (product) => product.price < 50
      )
      filteredProducts.forEach((product) => newArray.push(product))
    }
    this.setState({ filteredProducts: newArray })
  }

  clearFilters = () => {
    this.setState({filteredProducts: this.state.products})
  }

  render() {
    return (
      <div className="product-wrapper">
        <div className="product-container">{this.mapProducts()}</div>
        <div className="filter-container">
          <Filter
            clickHandler={this.priceFilter}
            categorySort={this.categorySort}
            priceNameSort={this.priceNameSort}
            clearFilters={this.clearFilters} 
          />
        </div>
      </div>
    )
  }
}

export default ProductContainer
