import React, { Component } from 'react';

class SplitPane extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <div className="row">
            <div className="col-xs-6 px-2">
               {this.props.left}
            </div>
            <div className="col-xs-6 px-2">
               {this.props.right}
            </div>
         </div>
      );
   }
}

export default SplitPane;