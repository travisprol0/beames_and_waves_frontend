import React from 'react';

const BrandFilter = (props) => {
    return (<span className="filter-span"><input type="checkbox" value={props.brand} onClick={props.clickHandler}/>
    {props.brand}
  </span>)
}

export default BrandFilter