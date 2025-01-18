import React, { Component, Fragment } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

export class ProductTable extends Component {
  render() {
    const { productList, inStock, searchText } = this.props;

    /**
     * Có 2 cách sử dụng vòng lặp
     * Cách 1: sử dụng forEach
     */

    let lastCategory = null;
    const rows = [];

    productList.forEach((productItem) => {
      if (inStock && !productItem.stocked) {
        return;
      }
      if (
        productItem.name.toLowerCase().indexOf(searchText.toLowerCase()) === -1
      ) {
        return;
      }
      if (productItem.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            key={productItem.category}
            category={productItem.category}
          />
        );
      }
      rows.push(<ProductRow key={productItem.name} product={productItem} />);
      lastCategory = productItem.category;
    });

    /**
     * Cách 2: Sử dụng Map
     */

    const rows1 = productList.map((productItem) => {
      if (productItem.category !== lastCategory) {
        lastCategory = productItem.category;
        return (
          <Fragment key={productItem.name}>
            <ProductCategoryRow category={productItem.category} />
            <ProductRow product={productItem} />
          </Fragment>
        );
      }
      return <ProductRow product={productItem} key={productItem.name} />;
    });

    return (
      <table>
        <thead>
          <h2>👉List Product forEach👈</h2>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>

        <thead>
          <h2>👉List Product Map👈</h2>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows1}</tbody>
      </table>
    );
  }
}

export default ProductTable;
