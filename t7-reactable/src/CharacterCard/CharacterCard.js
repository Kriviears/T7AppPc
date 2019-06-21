import React, {Component} from 'react'
import './CharacterCard.css'

export default class CharacterCard extends Component{
    render(){
        return(
            <div className='CharacterCard'>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}