import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
import peopleArr from './data/people';

export class App extends Component {
  render() {
    return (
      <div className='container border border-primary my-3 p-3'>
        {
          peopleArr.map((person, idx) => {
            return(
              <PersonCard
                key={idx}
                firstName={person.firstName}
                lastName={person.lastName}
                age={person.age}
                hairColor={person.hairColor}
              />
            )
          })
        }
      
      </div>
    )
  }
}
export default App;
