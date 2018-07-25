import React, { Component } from 'react';
import Input from '../presentational/Input';
import Select from '../presentational/Select';

class UserForm extends Component {
   constructor() {
      super();

      this.state = {
         name: '',
         selectOne: 'coconut'
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      this.setState({ [event.target.id]: event.target.value });
   }

   handleSubmit(event) {
      alert(`A name called ${this.state.name} with selection value ${this.state.selectOne} has submited`);
      event.preventDefault();
   }

   render() {

      const { name, selectOne } = this.state;
      return (
         <form id="userForm" onSubmit={this.handleSubmit}>

            <p>Name: <b>{name}</b></p>
            <p>Selected: <b>{selectOne}</b></p>

            <Input text="User name" label="name" type="text"
               id="name" value={name} handleChange={this.handleChange} />

            <Input text="" label="" type="submit"
               id="" value="Submit" handleChange={null} />

            <Select text="Select an option&nbsp;" label="selectOne"
               id="selectOne" value={selectOne} handleChange={this.handleChange} />

         </form>
      );
   }
}

export default UserForm;