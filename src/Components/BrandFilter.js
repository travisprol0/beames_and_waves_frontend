import React from "react"

const BrandFilter = (props) => {
  let brands = props.products.map((product) => product.brand)
  let uniqueBrands = [...new Set(brands)]
  let brandCheckboxes = uniqueBrands.map((brand) => (
    <span className="filter-span">
      <input type="checkbox" value={brand} onClick={() => props.clickHandler(brand)} /> {brand}
    </span>
  ))

  return (
    <>
      {brandCheckboxes}
    </>
  )
}

export default BrandFilter

{
  /* <span className="filter-span"><input type="checkbox" value={props.brand} onClick={props.clickHandler}/>
    {props.brand}
  </span>  */
}

// ;<span className="filter-span">
//   <input
//     className="checkbox"
//     type="checkbox"
//     value="$2000+"
//     onClick={() => this.props.clickHandler("$2000+")}
//   />
//   $2000+
// </span>
