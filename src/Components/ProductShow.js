import React from "react"

class ProductShow extends React.Component {
  state = {
    product: [],
    quantityEntered: 1,
  }
  componentDidMount() {
    let product = this.props.products.find(
      (product) => product.id === parseInt(this.props.match.params.id)
    )
    this.setState({ product: product })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.createCart()
    alert(this.state.product.title + " added to cart")
  }

  createCart = () => {
    let product_id = parseInt(this.state.product.id)
    let quantity = parseInt(this.state.quantityEntered)
    let quantityAvailable = parseInt(this.state.product.quantity)
    console.log(quantityAvailable)
    let object = {
      user_id: 1,
      product_id: product_id,
      quantity: quantity,
      sold: false,
      quantityAvailable: quantityAvailable,
    }

    fetch("http://localhost:3000/carts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(object),
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
          <div className="left-div">
            <div className="imageShowDiv">
              <img
                className="imageShow"
                src={product.image}
                alt={product.title}
              />
            </div>
          </div>
          <div className="right-div">
            <div className="info">
              <h2>{product.title}</h2>
              <div className="pricing">
                <div className="price">
                  <h4>Price: ${product.price}</h4>
                </div>
                <div className="add-to-cart">
                  <span>
                    <form
                      className="add-to-cart-form"
                      onSubmit={this.submitHandler}
                    >
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

                      <input
                        className="add-to-cart-button"
                        type="submit"
                        value="Add To Cart"
                      ></input>
                    </form>
                  </span>
                </div>
                <div className="quantity-available">
                  <h5>Quantity Available: {product.quantity}</h5>
                </div>
              </div>
            </div>
            <div className="bottom-div">
              <div className="specs">
                <h4>Specs</h4>
                <ul>
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
                <h4>Description</h4>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ProductShow
