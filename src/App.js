import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Creatures from './Creatures'
import CreatureDetails from './CreatureDetails'
import unicornData from './data/unicorn-data';
import puppyData from './data/puppy-data';
import sharkData from './data/shark-data';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <header>
          <NavLink to='/unicorns' className='nav'>Unicorns</NavLink>
          <NavLink to='/puppies' className='nav'>Puppies</NavLink>
          <NavLink to='/sharks' className='nav'>Sharks</NavLink>
        </header>
        <Route exact path='/' component={ Home } />
        <Route exact path='/unicorns' render= { () => <Creatures data={unicornData} /> } />
        <Route exact path='/puppies' render= { () => <Creatures data={puppyData} /> } />
        <Route exact path='/sharks' render= { () => <Creatures data={sharkData} /> } />


        <Route exact path='/unicorns/:id' render={ ({match}) => {
          const foundUnicorn = unicornData.find(unicorn => {
            return unicorn.id == match.params.id
          })
          return <CreatureDetails id={foundUnicorn.id} name={foundUnicorn.name} image={foundUnicorn.image} bio={foundUnicorn.bio} type={foundUnicorn.type}/>
        }} />
        <Route exact path='/puppies/:id' render={ ({match}) => {
          const foundPuppy = puppyData.find(puppy => {
            return puppy.id == match.params.id
          })
          return <CreatureDetails id={foundPuppy.id} name={foundPuppy.name} image={foundPuppy.image} bio={foundPuppy.bio} type={foundPuppy.type}/>
        }} />
        <Route exact path='/sharks/:id' render={ ({match}) => {
          const foundShark = sharkData.find(shark => {
            return shark.id == match.params.id
          })
          return <CreatureDetails id={foundShark.id} name={foundShark.name} image={foundShark.image} bio={foundShark.bio} type={foundShark.type}/>
        }} />
      </main>
    );
  }
}
