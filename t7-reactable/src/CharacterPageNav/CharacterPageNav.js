import React, { Component } from 'react';
import './CharacterPageNav.css';
import { Link } from 'react-router-dom';
import TekkenContext from '../TekkenContext';

export default class CharacterPageNav extends Component{
    static contextType = TekkenContext;

    render(){
        return(
            <>
                <Link
                    className='CharacterPage__Link'
                    to={`/`}>
                    <h1>{this.props.match.params.name}</h1>
                </Link>
            </>
        )
    }
}