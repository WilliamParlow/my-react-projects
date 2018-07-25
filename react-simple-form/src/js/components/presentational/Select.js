import React from 'react';
import PropTypes from 'prop-types';

const Select = props => (
   <div className="form-group">
      <label htmlFor={props.label}>{props.text}</label>
      <select id={props.id} value={props.value} onChange={props.handleChange}>
         <option value="grapefruit">Grapefruit</option>
         <option value="lime">Lime</option>
         <option value="coconut">Coconut</option>
         <option value="mango">Mango</option>
      </select>
   </div>
);

Select.propTypes = {
   label: PropTypes.string,
   text: PropTypes.string,
   id: PropTypes.string,
   value: PropTypes.string,
   handleChange: PropTypes.func
};

export default Select;