import React, { Component } from 'react';

class SearchBar extends Component {
   constructor(props) {
      super(props);

      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
   }

   handleFilterTextChange(event) {
      this.props.onFilterTextChange(event.target.value);
   }

   handleInStockChange(event) {
      this.props.onInStockChange(event.target.checked);
   }

   render() {
      return (
         <form>
            <input
               type="text"
               placeholder="Search..."
               onChange={this.handleFilterTextChange}
               value={this.props.filterText} />
            <p>
               <input
                  type="checkbox"
                  checked={this.props.isStockOnly}
                  onChange={this.handleInStockChange} />
               {' '}
               Only show products in stock
            </p>
         </form>
      )
   }
}

export default SearchBar;