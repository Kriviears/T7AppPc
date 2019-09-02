import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
//import { characters } from './DummyData'
import TekkenContext from './TekkenContext'
import {gatherData} from './aux-functions'

import CharacterPageMain from './CharacterPageMain/CharacterPageMain'
import CharacterPageNav from './CharacterPageNav/CharacterPageNav'
import CharacterListMain from './CharacterListMain/CharacterListMain'
import CharacterListNav from './CharacterListNav/CharacterListNav'





class App extends React.Component {
  state = {
    characters: [],
    currentCharacter: {},
    moves: []
  }

  setCharacters = data =>{
    this.setState({
      characters: data
    })
  }

  getMoves = data =>{
    this.setState({
      moves: data
    })
  }

  setCurrentCharacter = name => {
    let current = this.state.characters.filter(char => char.name === name);
    this.setState({
      currentCharacter: current
    })
  }

  characterSelect = i =>{
    const char = this.state.characters[i];
    this.setState({
      currentCharacter: char
    })
  }

  backHome(){
    this.setState({
      currentCharacter: {name: ''} 
    })
  }
  

  renderNavRoutes(){
    return(
      <>
        <Route
          exact path='/'
          component={CharacterListNav}
        />
        <Route
          path='/character/:name'
          component={CharacterPageNav}
        />
      </>
    )
  }

  renderMainRoutes(){
    return(
      <>
        <Route 
          exact path='/'
          component={CharacterListMain}
        />
        <Route
          path='/character/:name'
          component={CharacterPageMain}
        />
      </>
    )
  }


  render(){
    const contextValue = {
      characters: this.state.characters,
      currentCharacter: this.state.currentCharacter,
      moves: this.state.moves,
      characterSelect: this.characterSelect,
      gatherData: gatherData,
      backHome: this.backHome,
      setCharacters: this.setCharacters,
      setCurrentCharacter: this.setCurrentCharacter,
      getMoves: this.getMoves
    }

    return (
      <TekkenContext.Provider value={contextValue}>
        <div className="App">
        <header className='App_header'>
          {this.renderNavRoutes()}
        </header>
        <body className='App_main'>
          {this.renderMainRoutes()}
        </body>
        </div>
      </TekkenContext.Provider>
    );
  }
}

export default App;