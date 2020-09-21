import React from "react"
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Form } from "react-bootstrap"
import { FormControl } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

class NavBar extends React.Component {
  state = {
    searchTerm: "",
  }

  onMouseEnter = () => {}

  onMouseLeave = () => {}

  searchChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  searchSubmitHandler = () => {
    this.props.searchBarHandler(this.state.searchTerm)
    this.setState({ searchTerm: "" })
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Shitty Ass Store</Navbar.Brand>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            name="searchTerm"
            value={this.state.searchTerm}
            onChange={this.searchChangeHandler}
          />

          <Link to="/search">
            <Button
              variant="outline-success"
              onClick={this.searchSubmitHandler}
            >
              Search
            </Button>
          </Link>
        </Form>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link
            href={"/equipment"}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onClick={this.navBarFilter}
          >
            All Equipment
          </Nav.Link>
          <Nav.Link
            href={"/equipment/lighting"}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          >
            Lighting Equipment
          </Nav.Link>
          <Nav.Link
            href={"/equipment/sound"}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onClick={this.navBarFilter}
          >
            Sound Equipment
          </Nav.Link>

          <Nav.Link href="/cart">
            <div className="cart-image">
              <img src="../../images/cart.png" alt="cart" />
            </div>
          </Nav.Link>
          <Nav.Link
            href={"/list-item"}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onClick={this.navBarFilter}
          >
            Sell Equipment
          </Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar
