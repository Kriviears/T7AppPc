import React, { Component } from 'react';
import './CharacterPageNav.css';
import { Link } from 'react-router-dom';
import TekkenContext from '../TekkenContext';

export default class CharacterPageNav extends Component{
    static contextType = TekkenContext;

    render(){
        const { currentCharacter, backHome } = this.context;
        return(
            <>
                <Link
                    className='CharacterPage__Link'
                    to={`/`}>
                    <h1>{currentCharacter.name}</h1>
                </Link>
            </>
        )
    }
}