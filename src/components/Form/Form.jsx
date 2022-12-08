import {Component } from "react";
import { nanoid } from 'nanoid';

class Form extends Component {
    state = {
        name: '',
        number: '',
        id: ''
    }

    handleInputContact = (e) => {
        const {value, name}= e.currentTarget
        this.setState({
            [name]: value,
            id: nanoid(10)
        });
    };

    handleAddContact = (e) => {
        e.preventDefault();
        
        const { onSubmit } = this.props;

        onSubmit(this.state);

        this.reset();
    };

    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    }
    
    render() {
        return (
         <form onSubmit={this.handleAddContact}>
            <label htmlFor="">Name
              
                <input
                    value={this.state.name}
                    onChange={this.handleInputContact}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required />
            </label> 
                
            <label htmlFor="">Number
                <input
                    value={this.state.number}
                    onChange={this.handleInputContact}
                    type="tel"
                    name="number" />
            </label>
              
            <button type="submit">Add</button>
              
          </form>
        );
    };
};


export default Form;
