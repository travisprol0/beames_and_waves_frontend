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
        <h1>List an Item</h1>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.changeHandler}
            placeholder="title"
          />
          <input
            type="text"
            name="brand"
            value={this.state.brand}
            onChange={this.changeHandler}
            placeholder="brand"
          />
          <input
            type="text"
            name="model"
            value={this.state.model}
            onChange={this.changeHandler}
            placeholder="model"
          />
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.changeHandler}
            placeholder="description"
          />
          <select
            name="category"
            value={this.state.image}
            onChange={this.changeHandler}
          >
            <option value="lighting">Lighting</option>
            <option value="sound">Sound</option>
          </select>
          <input
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.changeHandler}
            placeholder="image"
          />
          <input
            type="number"
            name="sku"
            value={this.state.sku}
            onChange={this.changeHandler}
            placeholder="sku"
          />
          <input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.changeHandler}
            placeholder="price"
          />
          <input
            type="number"
            name="quantity"
            value={this.state.quantity}
            onChange={this.changeHandler}
            placeholder="quantity"
          />
          <input type="submit" value="list-item" />
        </form>
      </>
    )
  }
}

export default Form
