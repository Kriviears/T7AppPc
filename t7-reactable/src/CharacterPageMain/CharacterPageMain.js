import React, { Component } from 'react'
import './CharacterPageMain.css'
import TekkenContext from '../TekkenContext';
import CharacterApiService from '../services/char-api-service'
import MoveList from '../MoveList/MoveList';

export default class CharacterPageMain extends Component{
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = TekkenContext;

    componentDidMount(){
        CharacterApiService.getMoves(this.props.match.params.name)
          .then(data =>{
              this.context.getMoves(data)
          })
    }

    render(){
        return(
            <div>

                <div className='container'>

                </div>

                <div className='container'>
                    <MoveList name={this.props.match.params.name}/>
                </div>
            </div>
        )
    }
}