import React from "react"
import Product from "../Components/Product"
import Filter from "../Components/Filter"
import FormContainer from "../Containers/FormContainer"
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
  state = {
    products: [],
    filteredProducts: [],
    display: false,
    checked: [],
  }

  componentDidMount() {
    fetch(BASE_URL + "products")
      .then((response) => response.json())
      .then((products) =>
        this.setState({ products: products, filteredProducts: products })
      )
  }
  mapProducts = () => {
    let filteredProducts = this.state.filteredProducts.filter(
      (product) => product.quantity !== 0
    )
    return filteredProducts.map((product) => (
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

  priceFilterClickHandler = (category) => {
    const currentIndex = this.state.checked.indexOf(category)
    const newChecked = [...this.state.checked]

    if (currentIndex === -1) {
      newChecked.push(category)
    } else {
      newChecked.splice(currentIndex, 1)
    }
    this.setState({ checked: newChecked })
    this.handleFilters()
  }

  handleFilters = () => {
    let products = this.state.products
    let filteredProducts = []
    let filters = [...this.state.checked]
    
    filters.forEach((filter) => {
      if (filter === "Less Than $50"){
        filteredProducts.push(products.filter((product) => product.price <= 50))
      } else if (filter === "$50 to $100"){
        filteredProducts.push(products.filter((product) => product.price >= 50 && product.price <=100))
      } else if (filter === "$100 to $250"){
        filteredProducts.push(products.filter((product) => product.price >= 100 && product.price <=250))
      } else if (filter === "$250 to $500"){
        filteredProducts.push(products.filter((product) => product.price >= 250 && product.price <=500))
      } else if (filter === "$500 to $1000"){
        filteredProducts.push(products.filter((product) => product.price >= 500 && product.price <=1000))
      } else if (filter === "$1000 to $2000"){
        filteredProducts.push(products.filter((product) => product.price >= 1000 && product.price <=2000))
      }
      else if (filter === "$2000+"){
        filteredProducts.push(products.filter((product) => product.price >= 2000))
      }
      // console.log(filteredProducts)
    })
    filteredProducts = filteredProducts.flat()
    if (filteredProducts.length <= 0) {
      filteredProducts = products
    }
    
    this.setState({filteredProducts: filteredProducts})

    // console.log(newFilters)
  }

  clearFilters = () => {
    this.setState({ filteredProducts: this.state.products })
  }

  formButtonHandler = () => {
    this.setState({ display: !this.state.display })
  }

  render() {
    return (
      <>
        <div className="form-div">
          {this.state.display ? <FormContainer /> : null}
        </div>
        <div className="sell-item-button-div">
          <button className="sell-item-button" onClick={this.formButtonHandler}>
            Sell Equipment
          </button>
        </div>

        <Filter
          clickHandler={this.priceFilterClickHandler}
          categorySort={this.categorySort}
          priceNameSort={this.priceNameSort}
          clearFilters={this.clearFilters}
        />
        <div className="product-wrapper">
          <h2 className="product-title">Products</h2>
          <div className="product-container">{this.mapProducts()}</div>
          <div className="filter-container"></div>
        </div>
      </>
    )
  }
}

export default ProductContainer
