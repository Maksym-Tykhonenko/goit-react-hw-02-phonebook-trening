import {Component } from "react";

import css from "./App.module.css"
import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import Section from "./Section";

export class App extends Component {
  state = {
    contacts: [],
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
          <Section title='Форма'>
             <Form
            onSubmit={this.hendleFormSubmit} />
          </Section>
          {this.state.contacts.length > 0 && 
            (<>
           <Section title='Список контактов'>
              <Filter 
                filter={filter } 
                addToFilterContact={this.addToFilterContact} />
              <ContactList 
                contact={contacts}
                deliteContact={this.deliteContact}
            />
             </Section>
            </>)
          }
           
         
          
        </div>
      );
  };
};
