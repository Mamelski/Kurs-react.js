import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import ContactsList from './ContactsList';

function onClickHandler() {
  alert('Kliknięto!');
}

class App extends Component {
  render() {
    return <button onClick={this.onClickHandler}>Kliknij!</button>;
  }
  onClickHandler() {
    alert("Kliknięto!");
  }
}
// return (
//   <div>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css"></link>
//     <AppHeader />
//     <main className="ui main text container">
//       <ContactsList />
//     </main>
//   </div>


export default App;