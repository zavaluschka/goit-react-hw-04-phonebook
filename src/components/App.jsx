import PhoneBook from "./PhoneBook/PhoneBook";
import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { Filter } from "./PhoneBook/Filter";
import { ContactList } from "./PhoneBook/ContactList";

export class App extends Component {
   state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = ({ event, name, number }) => {
    event.preventDefault();
    if (
      this.state.contacts.some(
        contact => contact.name === name || contact.number === number
      )
    ) {
      alert('This contact alredy exist');
      return;
    }
    this.setState(pervState => ({
      contacts: [
        { name: name, number: number, id: nanoid() },
        ...pervState.contacts,
      ],
    }));
  };
   handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
    if ((event.target.name = 'filter')) {
    }
  };

  
  getFilteredContacts(filter) {
    return this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  }

  handleDelete = id => {
    console.log();
    this.setState(prevState => {
      if (this.state.contacts.find(contact => contact.id === id)) {
        prevState.contacts.splice(
          this.state.contacts.indexOf(
            this.state.contacts.find(contact => contact.id === id)
          ),
          1
        );
      }
      return { contacts: prevState.contacts };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      const stringiFiedContacts = JSON.stringify(this.state.contacts)
      localStorage.setItem('contact', stringiFiedContacts)
   }
  }
  componentDidMount() {
    const stringiFiedContacts = localStorage.getItem('contact')
    const parsedContacts = JSON.parse(stringiFiedContacts) ?? []
    this.setState({
      contacts: parsedContacts
    })
  }
  render(){
    return (
      <div
      
      >
        <PhoneBook handleAddContact={this.handleAddContact}
        state={this.state}
          handleInput={this.handleInput} />
        <Filter handleInput={this.handleInput}
           state={this.state}
        />
        <ContactList contacts={this.getFilteredContacts(this.state.filter)}
          handleDelete={this.handleDelete}/>
      
      </div>
    );
  }
};
