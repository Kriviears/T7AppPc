import React, {Component} from 'react'
import './CharacterCard.css'

export default class CharacterCard extends Component{
    render(){
        return(
            <>
                <div className='CharacterCard'>
                    <h1>{this.props.name}</h1>
                    <div className='CharacterPic'>
                        <img src={this.props.src} 
                        alt={this.props.alt}/>
                    </div>
                </div>
            </>
        )
    }
}