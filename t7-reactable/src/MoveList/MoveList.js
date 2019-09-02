import React, { Component } from 'react'
import './MoveList.css'
import TekkenContext from '../TekkenContext'
import CharacterApiService from '../services/char-api-service'
import Move from '../Move/move'


export default class MoveList extends Component{
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = TekkenContext;

    
    render(){
      const { moves } = this.context;
      let filteredList = moves;

      return (
        <table className='movelist'>
            <thead>
                <tr>
                    <th><h1>{this.props.name}</h1></th>
                    <th><h1>Move name</h1></th>
                    <th><h1>startup</h1></th>
                    <th><h1>activeframes</h1></th>
                    <th><h1>on-block</h1></th>
                    <th><h1>on-hit</h1></th>
                    <th><h1>Guard-level</h1></th>
                    <th><h1>recovery</h1></th>
                    <th><h1>damage</h1></th>
                    <th><h1>cancelable?</h1></th>
                    <th><h1>super cancelable?</h1></th>
                    <th><h1>properties</h1></th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredList.map(move => 
                        <Move
                            command={move.command}
                            media={move.media}
                            startup={move.startup}
                            activeframes={move.activeframes}
                            onblock={move.onblock}
                            onhit={move.onhit}
                            attribute={move.attribute}
                            recovery={move.recovery}
                            damage={move.damage}
                            cancel={move.cancel?'Yes':''}
                            super_cancel={move.super_cancel?'Yes':''}
                            properties={move.properties}
                            special={move.special?'Yes':''}
                        />
                    )
                }
            </tbody>
        </table>
      )
    }
}