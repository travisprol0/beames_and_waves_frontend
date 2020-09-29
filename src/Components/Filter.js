import React from "react"
import BrandFilter from "../Components/BrandFilter"

class Filter extends React.Component {
  categorySort = (e) => {
    this.props.categorySort(e.target.value)
  }

  priceNameSort = (e) => {
    this.props.priceNameSort(e.target.value)
  }
  render() {
    return (
      <div className="filter-wrapper">
        <div className="sort-by-category">
          <h5>Filter By Category</h5>
          <select
            onChange={this.categorySort}
            name="sort-query"
            className="sort-select"
            defaultValue={"none"}
          >
            <option value="none" defaultValue disabled hidden>
              Select an Option
            </option>
            <option value="lighting">Lighting Equipment</option>
            <option value="sound">Sound Equipment</option>
          </select>
        </div>
        <div className="sort-by-price-name">
          <h5>Sort By Price/Name</h5>
          <select
            onChange={this.priceNameSort}
            name="sort-query"
            className="sort-select"
            defaultValue={"none"}
          >
            <option value="none" defaultValue disabled hidden>
              Select an Option
            </option>
            <option value="low to high">Price Low to High</option>
            <option value="high to low">Price High to Low</option>
            <option value="ascending">Name Ascending</option>
            <option value="descending">Name Descending</option>
          </select>
        </div>
        <div className="filter">
          <h5>Filter By Price</h5>
          <form className="filter-form">
            <span className="filter-span">
              <input
                className="checkbox"
                type="checkbox"
                value="Less Than $50"
                onClick={() => this.props.clickHandler("Less Than $50")}
              />
              Less Than $50
            </span>
            <span className="filter-span">
              <input
                className="checkbox"
                type="checkbox"
                value="$50 to $100"
                onClick={() => this.props.clickHandler("$50 to $100")}
              />
              $50 to $100
            </span>
            <span className="filter-span">
              <input
                className="checkbox"
                type="checkbox"
                value="$100 to $250"
                onClick={() => this.props.clickHandler("$100 to $250")}
              />
              $100 to $250
            </span>
            <span className="filter-span">
              <input
                className="checkbox"
                type="checkbox"
                value="$250 to $500"
                onClick={() => this.props.clickHandler("$250 to $500")}
              />
              $250 to $500
            </span>
            <span className="filter-span">
              <input
                className="checkbox"
                type="checkbox"
                value="$500 to $1000"
                onClick={() => this.props.clickHandler("$500 to $1000")}
              />
              $500 to $1000
            </span>
            <span className="filter-span">
              <input
                className="checkbox"
                type="checkbox"
                value="$1000 to $2000"
                onClick={() => this.props.clickHandler("$1000 to $2000")}
              />
              $1000 to $2000
            </span>
            <span className="filter-span">
              <input
                className="checkbox"
                type="checkbox"
                value="$2000+"
                onClick={() => this.props.clickHandler("$2000+")}
              />
              $2000+
            </span>
          </form>
          <div className="filter">
            <h5>Filter By Brand</h5>
            <form className="brand-filter-form">
              <BrandFilter
                products={this.props.products}
                clickHandler={this.props.clickHandler}
              />
            </form>
          </div>
        </div>
        <div className="clear-filter-button-div">
          <button
            className="clear-filter-button"
            onClick={this.props.clearFilters}
          >
            Clear
          </button>
        </div>
      </div>
    )
  }
}

export default Filter
