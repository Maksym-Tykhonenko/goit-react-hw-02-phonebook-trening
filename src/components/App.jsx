import {Component } from "react";

import css from "./App.module.css"
import Form from "./Form/Form";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  hendleFormSubmit = (newContact) => {

    const { name: newName } = newContact;
    const normalizedNewName = newName.toLowerCase();

    !this.state.contacts.find(
      ({ name: prevName }) => prevName.toLowerCase() === normalizedNewName
    ) ?
      this.setState(({ contacts }) => ({
        contacts: [...contacts, newContact],
      })) :
      alert(`${newName} IS ALREADY IN CONTACT!!!`);
  };

  addToFilterContact = (e) => {
    const { value } = e.currentTarget;
    this.setState({
      filter: value
    })
  };

  renderContact = () => {
    const { contacts, filter } = this.state;
    
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()));
  };

  deliteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=>contact.id !== contactId)
    }))
  };

  render() {
    const { filter } = this.state;
    const contacts = this.renderContact();
   
      return (
        <div className={css.block}>
          <Form
            onSubmit={this.hendleFormSubmit} />
          <Filter 
            filter={filter } 
            addToFilterContact={this.addToFilterContact } />
          <ContactList 
            contact={contacts}
            deliteContact={this.deliteContact}
             />
        </div>
      );
  };
};
