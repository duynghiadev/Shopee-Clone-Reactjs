import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    const { searchText, inStock, handleChange } = this.props
    return (
      <form>
        <input
          type='text'
          placeholder='Search...'
          name='product'
          value={searchText}
          onChange={handleChange}
        />
        <div>
          <input
            type='checkbox'
            name='in stock'
            value={inStock}
            onChange={handleChange}
          />
          Only show products in stock
        </div>
      </form>
    )
  }
}

export default SearchBar
