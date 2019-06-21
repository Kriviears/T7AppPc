import React, { Component } from 'react'
import './CharacterListMain.css'
import {NavLink, Link} from 'react-router-dom'
import CharacterCard from '../CharacterCard/CharacterCard'
import TekkenContext from '../TekkenContext';

export default class CharacterListMain extends Component{
    static contextType = TekkenContext
    
    render(){
        const { characters=[], characterSelect} = this.context
        let filteredList = characters

        return(
            <div className='CharListMain'>
                <ul className='CharList'>
                    {filteredList.map((char, i) =>
                        <li 
                        key={i}
                        onClick={() => characterSelect(i)}
                        >
                            <Link
                                className='CharacterList__link'
                                to={`/character/${char.name}`}>
                                <CharacterCard 
                                    name={char.name}
                                />
                            </Link>
                        </li>
                
                    )}
                </ul>
            </div>
        )
    }
}
