import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import ProductTable from '../components/ProductTable';
import axios from 'axios';

class FilterableProductTable extends Component {
   constructor(props) {
      super(props);
      this.state = {
         filterText: '',
         isStockOnly: false,
         products: []
      };

      axios.get('https://raw.githubusercontent.com/WilliamParlow/my-react-projects/master/react-router/json/product.json')
         .then(res =>
            this.setState({ products: res.data }))

      this.onFilterTextChange = this.onFilterTextChange.bind(this);
      this.onInStockChange = this.onInStockChange.bind(this);

   }

   onFilterTextChange(filterText) {
      this.setState({ filterText: filterText });
   }

   onInStockChange(isStockOnly) {
      this.setState({ isStockOnly: isStockOnly })
   }

   render() {
      const { filterText, isStockOnly, products } = this.state;

      return (
         <div>
            <SearchBar
               onFilterTextChange={this.onFilterTextChange}
               onInStockChange={this.onInStockChange}
               filterText={filterText}
               isStockOnly={isStockOnly} />
            <ProductTable
               products={products}
               filterText={filterText}
               isStockOnly={isStockOnly} />
         </div>
      );
   }

}

export default FilterableProductTable;