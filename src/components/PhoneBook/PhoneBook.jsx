import React, { Component } from 'react'
import css from './PhoneBook.module.css'

export default class PhoneBook extends Component {
  state = {
  number: '',
  name: ''
    }
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
  render() {
    return (
        <div>
        <form className={ css.form} onSubmit={event => {
          this.setState({ name: '', number: '' });

          this.props.handleAddContact({
            event,
            name: this.state.name,
            number: this.state.number,
          });
        }}
            >
                <h2 className={css.title}>Phonebook</h2>
                <label className={css.label}>
                    Name
                    <input className={css.input} onChange={this.handleInputChange} value={this.state.name} name="name" type="text" required/>
                </label>
                <label className={css.label}>
                    Number
                    <input className={css.input}  onChange={this.handleInputChange} value={this.state.number} name="number" type="tel" required/>
                </label>
          <button className={css.btn} type="submite">add contact</button>
        </form>
      </div>
    )
  }
}
