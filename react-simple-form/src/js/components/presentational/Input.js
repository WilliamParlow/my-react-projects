import React from 'react';
import PropTypes from 'prop-types'

const Input = props => (
   <div className="form-group">
      <label htmlFor={props.label}>{props.text}</label>
      <input type={props.type} className="form-control" id={props.id}
         value={props.value} onChange={props.handleChange} required
      />
   </div>
);

Input.propTypes = {
   label: PropTypes.string,
   text: PropTypes.string,
   type: PropTypes.string,
   id: PropTypes.string,
   value: PropTypes.string,
   handleChange: PropTypes.func
};
export default Input;