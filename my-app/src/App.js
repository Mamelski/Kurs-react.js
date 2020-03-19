import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import ContactsList from './ContactsList';


class App extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css"></link>
        <AppHeader />
        <main className="ui main text container">
          <ContactsList />
        </main>
      </div>
    );
  }
}

export default App;