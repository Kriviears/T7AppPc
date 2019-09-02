import React, { Component } from 'react'
import './CharacterListNav.css'
import TekkenContext from '../TekkenContext';

export default class CharacterListNav extends Component{
    static contextType = TekkenContext;
    render(){
        
        
        return(

            <div className='CharListNav'>
                <h1>Embrace Frames</h1>
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
