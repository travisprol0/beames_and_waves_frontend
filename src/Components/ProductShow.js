import React from "react"

class ProductShow extends React.Component {
  state = {
    product: [],
    quantityEntered: 1,
  }
  componentDidMount() {
    let url = this.props.match.url
    fetch("http://localhost:3000" + url)
      .then((response) => response.json())
      .then((product) => this.setState({ product: product }))
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.createCart()
  }

  createCart = () => {
    let product_id = parseInt(this.state.product.id)
    let quantity = parseInt(this.state.quantityEntered)
    let object = { user_id: 26, product_id: product_id,  quantity: quantity, sold: false }

    fetch("http://localhost:3000/carts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(object)
    })
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    let product = this.state.product
    return (
      <>
        <div className="productShow">
          <div className="topDiv">
            <div className="imageShowDiv">
              <img
                className="imageShow"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="pricing">
              <h2>{product.title}</h2>
              <h2>${product.price}</h2>
              <br></br>
              <h5>Quantity: {product.quantity}</h5>
              <h5>Condition: </h5>
              <form onSubmit={this.submitHandler}>
                <input
                  type="number"
                  label="Quantity"
                  placeholder="#"
                  name="quantityEntered"
                  defaultValue="1"
                  min="1"
                  max={product.quantity}
                  value={this.state.quantity}
                  onChange={this.changeHandler}
                ></input>
                <input type="submit" value="Add To Cart"></input>
              </form>
            </div>
          </div>
          <div className="bottomDiv">
            <div className="specs">
              <ul>
                <li>
                  <strong>Title:</strong> {product.title}
                </li>
                <li>
                  <strong>Brand:</strong> {product.brand}
                </li>
                <li>
                  <strong>Model:</strong> {product.model}
                </li>
                <li>
                  <strong>SKU:</strong> {product.sku}
                </li>
              </ul>
            </div>
            <div className="description">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ProductShow
