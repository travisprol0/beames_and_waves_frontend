import React from "react"
import BrandFilter from '../Components/BrandFilter'

const Filter = (props) => {



  
    const allProductBrands = props.products.map((product) => product.brand)
    const productBrands = [...new Set(allProductBrands)]
    const whatever = allProductBrands.forEach((brand) => <BrandFilter brand={brand} />)
    console.log(allProductBrands)
    
    return (
      <div>
        <h5>Filter By Price</h5>
        <form className="filter-form">
          <span className="filter-span">
            <input
              type="checkbox"
              value="Less Than $50"
            //   onClick={this.clickHandler}
            />{" "}
            Less Than $50
          </span>
          <span className="filter-span">
            <input
              type="checkbox"
              value="$50 to $100"
            //   onClick={this.clickHandler}
            />
            $50 to $100
          </span>
          <span className="filter-span">
            <input
              type="checkbox"
              value="$100 to $250"
            //   onClick={this.clickHandler}
            />
            $100 to $250
          </span>
          <span className="filter-span">
            <input
              type="checkbox"
              value="$250 to $500"
            //   onClick={this.clickHandler}
            />
            $250 to $500
          </span>
          <span className="filter-span">
            <input
              type="checkbox"
              value="$500 to $1000"
            //   onClick={this.clickHandler}
            />
            $500 to $1000
          </span>
          <span className="filter-span">
            <input
              type="checkbox"
              value="$1000 to $2000"
            //   onClick={this.clickHandler}
            />
            $1000 to $2000
          </span>
          <span className="filter-span">
            <input type="checkbox" value="$2000+" 
            // onClick={this.clickHandler} 
            />
            $2000+
          </span>
        </form>
        <br></br>
        <h5>Filter By Brand</h5>
        <form className="brand-filter-form">
            {whatever}
        </form>
      </div>
    )
  
}

export default Filter
