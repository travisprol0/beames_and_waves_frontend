import React from "react"
// import BrandFilter from '../Components/BrandFilter'

const Filter = (props) => {

    // const whatever = props.products.forEach((brand) =>  <BrandFilter brand={brand}/>)
    // 
    // console.log(props.products)
    
    return (
      <div>
        <h5>Filter By Price</h5>
        <form className="filter-form">
          <span className="filter-span">
            <input
              type="checkbox"
              value="Less Than $50"
              onClick={props.clickHandler}
            />{" "}
            Less Than $50
          </span>
          <span className="filter-span">
            <input
              type="checkbox"
              value="$50 to $100"
              onClick={props.clickHandler}
            />
            $50 to $100
          </span>
          <span className="filter-span">
            <input
              type="checkbox"
              value="$100 to $250"
              onClick={props.clickHandler}
            />
            $100 to $250
          </span>
          <span className="filter-span">
            <input
              type="checkbox"
              value="$250 to $500"
              onClick={props.clickHandler}
            />
            $250 to $500
          </span>
          <span className="filter-span">
            <input
              type="checkbox"
              value="$500 to $1000"
              onClick={props.clickHandler}
            />
            $500 to $1000
          </span>
          <span className="filter-span">
            <input
              type="checkbox"
              value="$1000 to $2000"
              onClick={props.clickHandler}
            />
            $1000 to $2000
          </span>
          <span className="filter-span">
            <input type="checkbox" value="$2000+" 
            onClick={props.clickHandler} 
            />
            $2000+
          </span>
        </form>
        <br></br>
        {/* <h5>Filter By Brand</h5>
        <form className="brand-filter-form">
            {whatever}
        </form> */}
      </div>
    )
  
}

export default Filter
