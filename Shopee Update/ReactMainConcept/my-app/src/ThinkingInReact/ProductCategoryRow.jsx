import React, { Component } from 'react'

export class ProductCategoryRow extends Component {
  render() {
    return (
      <tr>
        <th colSpan={2}>{this.props.category}</th>
      </tr>
    )
  }
}

export default ProductCategoryRow
