import React, { Component } from 'react'
import './CharacterListNav.css'
import TekkenContext from '../TekkenContext';

export default class CharacterListNav extends Component{
    static contextType = TekkenContext;
    render(){
        const { currentCharacter } = this.context
        let heading = !currentCharacter.name
        ? <h1>Character List</h1> : <h1>{currentCharacter.name}</h1>;
        return(

            <div className='CharListNav'>
                { heading }
              {/* <ul className='CharListNav_List'>
                {characters.map(character => 
                    <li
                    className='CharacterListNav_character-link'>
                        <span className='CharacterListNav'>{character.name} *Make a character card component</span>
                    </li>
                )}
              </ul> */}
            </div>
        )
    }
}
