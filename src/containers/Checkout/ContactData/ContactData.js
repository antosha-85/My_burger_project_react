import React, { Component } from "react";
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
        street: '',
        postalCode: ''
    }
  };
  render() {
      return (
          <div className={classes.ContactData}>
              <h4>Enter your Contact Data</h4>
              <form>
                  <input className={classes.Input} type="text" name='name' placeholder="Your name"></input>
                  <input className={classes.Input} type="email" name='email' placeholder="Your email"></input>
                  <input className={classes.Input} type="text" name='street' placeholder="Stret"></input>
                  <input className={classes.Input} type="text" name='postal' placeholder="Postal Code"></input>
              </form>
              <Button btnType='Success' clicked>ORDER</Button>
          </div>
      )
  }
}

export default ContactData;
