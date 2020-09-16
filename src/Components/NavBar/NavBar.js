import React from "react"
import { Navbar } from "react-bootstrap"
import { Nav } from "react-bootstrap"
import { Form } from "react-bootstrap"
import { FormControl } from "react-bootstrap"
import { Button } from "react-bootstrap"

class NavBar extends React.Component {
  
  onMouseEnter = () => {
  }

  onMouseLeave = () => {
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Shitty Ass Store</Navbar.Brand>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href={'/products'}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onClick={this.navBarFilter}
          >
            All Equipment
          </Nav.Link>
          <Nav.Link href={'/products/lighting'}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          >
            Lighting Equipment
          </Nav.Link>
          <Nav.Link href={'/products/sound'}
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
        </Nav>
      </Navbar>
    )
  }
}

export default NavBar
