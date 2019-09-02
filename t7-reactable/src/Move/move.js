import React, { Component } from 'react'
import './move.css'
import TekkenContext from '../TekkenContext'

export default class Move extends Component{

    state = {
        media: this.props.media,
        command: this.props.command,
        startup: this.props.startup,
        activeframes: this.props.activeframes,
        onblock: this.props.onblock,
        onhit: this.props.onhit,
        attribute: this.props.attribute,
        recovery: this.props.recovery,
        damage: this.props.damage,
        cancel: this.props.cancel,
        super_cancel: this.props.super_cancel,
        properties: this.props.properties,
        special: this.props.special
    }

    fixProps= data =>{
        if(data.media === null){
            this.setState({
                media: 'image coming soon'
            })
        }
        if(data.attribute === ""){
            this.setState({
                attribute: 'mid'
            })
        }
    }

    static contextType = TekkenContext;

    render(){
        this.fixProps(this.state)
        return(
            <tr>
                <td>{this.state.media}</td>
                <td>{this.state.command}</td>
                <td>{this.state.startup}</td>
                <td>{this.state.activeframes}</td>
                <td>{this.state.onblock}</td>
                <td>{this.state.onhit}</td>
                <td>{this.state.attribute}</td>
                <td>{this.state.recovery}</td>
                <td>{this.state.damage}</td>
                <td>{this.state.cancel}</td>
                <td>{this.state.super_cancel}</td>
                <td>{this.state.properties}</td>
            </tr>
        )
    }
}