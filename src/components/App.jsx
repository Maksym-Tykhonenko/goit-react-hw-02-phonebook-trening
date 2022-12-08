import {Component } from "react";

import Form from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  hendleFormSubmit = (newContact) => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };
  addToFilterContact = (e) => {
    const { value } = e.currentTarget;
    this.setState({
      filter: value
    })
  };
  renderContact = () => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase()));

  }

  
  //contact={this.state.contacts}
  render() {
    const { filter } = this.state;
    const contacts = this.renderContact();
      return (
        <div>
          <Form
            onSubmit={this.hendleFormSubmit} />
          <Filter 
            filter={filter } 
            addToFilterContact={this.addToFilterContact } />
          <ContactList 
            contact={contacts}
            
             />
        </div>
      );
  };
};
