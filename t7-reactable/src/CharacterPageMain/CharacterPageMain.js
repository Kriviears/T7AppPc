import React, { Component } from 'react'
import './CharacterPageMain.css'
import TekkenContext from '../TekkenContext';
import { characters } from '../DummyData';

export default class CharacterPageMain extends Component{
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = TekkenContext;

    render(){
        const {gatherData} = this.context;
        const {name} = this.props.match.params
        const character = gatherData(characters, name)
        return(
            <div>
                <h1 className='CharName'>{character.name}</h1>
            </div>
        )
    }
}