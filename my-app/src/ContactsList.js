import React, { Component } from 'react';
import ContactItem from './ContactItem';

class ContactsList extends Component {
  render() {
    return (
      <ul className="ui relaxed divided list selection">
        <ContactItem
          login="typeofweb1"
          name="Lena"
          department="JavaScript Developer"
        />
        <ContactItem
          login="email1@email.pl"
          name="Brian"
          department="Human Resources"
        />
        <ContactItem
          login="email3@email.pl"
          name="Rick"
          department="QA"
        />
      </ul>
    )
  }
}

export default ContactsList;