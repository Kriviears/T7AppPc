import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import { characters } from './DummyData'
import TekkenContext from './TekkenContext'
import {gatherData} from './aux-functions'

import CharacterPageMain from './CharacterPageMain/CharacterPageMain'
import CharacterPageNav from './CharacterPageNav/CharacterPageNav'
import CharacterListMain from './CharacterListMain/CharacterListMain'
import CharacterListNav from './CharacterListNav/CharacterListNav'





class App extends React.Component {
  state = {
    characters: characters,
    currentCharacter: {}
  }


  characterSelect = i =>{
    const char = this.state.characters[i];
    this.setState({
      currentCharacter: char
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
      characterSelect: this.characterSelect,
      gatherData: gatherData
    }

    return (
      <TekkenContext.Provider value={contextValue}>
        <div className="App">
        <header className='App_header'>
          {/* {this.renderNavRoutes()} */}
          <Link to='/' onClick={()=>this.characterSelect(0)}>
            <CharacterListNav/>
          </Link>
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