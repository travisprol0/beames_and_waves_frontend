import React from "react"

class Form extends React.Component {
  state = {
    title: "",
    brand: "",
    model: "",
    sku: "",
    description: "",
    price: "",
    quantity: "",
    category: "lighting",
    image: "",
    user_id: 1,
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.setState({
      title: "",
      brand: "",
      model: "",
      sku: "",
      description: "",
      price: "",
      quantity: "",
      category: "lighting",
      image: "",
      user_id: 1,
    })
    this.postItem()
  }

  postItem = () => {
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(this.state),
    })
  }

  render() {
    return (
      <>
        <h2 className="list-title">List an Item</h2>
        <form className="form" onSubmit={this.submitHandler}>
          <div className="form-top">

          <span className="input-title">
            Title:
            <input
            className="input-title-input"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.changeHandler}
              placeholder="title"
            />
          </span>
          <span className="input-brand">
            Brand:
            <input
              className="input-brand-input"
              type="text"
              name="brand"
              value={this.state.brand}
              onChange={this.changeHandler}
              placeholder="brand"
            />
          </span>
          <span className="input-model">Model:
            <input
              className="input-model-input"
              type="text"
              name="model"
              value={this.state.model}
              onChange={this.changeHandler}
              placeholder="model"
            />
          </span>
          
          </div>
          <div className="form-bottom">

          <span className="input-image">Image:
            <input
              className="input-image-input"
              type="text"
              name="image"
              value={this.state.image}
              onChange={this.changeHandler}
              placeholder="image"
            />
          </span>
          <span className="input-price">Price:
            <input
              className="input-price-input"
              type="number"
              name="price"
              min= "1"
              value={this.state.price}
              onChange={this.changeHandler}
              placeholder="price"
            />
          </span>
          <span className="input-quantity">Quantity:
            <input
              className="input-quantity-input"
              type="number"
              name="quantity"
              min= "1"
              value={this.state.quantity}
              onChange={this.changeHandler}
              placeholder="quantity"
            />
          </span>
          <span className="input-category">Category:
            <select
              className="input-category-input"
              name="category"
              value={this.state.category}
              onChange={this.changeHandler}
            >
              <option value="lighting">Lighting</option>
              <option value="sound">Sound</option>
            </select>
          </span>
          </div>
          <h5 className="description-header">Description</h5>
          <div className="description-div">

          <span className="input-description">
            <textarea
              className="input-description-input"
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.changeHandler}
              placeholder="description"
            />
          </span>
          </div>
          <span className="input-submit">
            <input className="list-item-button" type="submit" value="list-item" />
          </span>
        </form>
      </>
    )
  }
}

export default Form
