import React, { Component } from 'react';
import '../Styles/ActiveView.css'
import tools from '../common/tools'

export default class ActiveView extends Component {
    constructor (props) {
        super(props);

        this.back = this.back.bind(this);
        this.name = tools.has(['location', 'state', 'game', 'name'], props) ? props.location.state.game.name : null;
        this.thumb = tools.has(['location', 'state', 'game', 'thumb'], props) ? props.location.state.game.thumb : null;
        this.description = tools.has(['location', 'state', 'game', 'description'], props) ? props.location.state.game.description : null;
    }

    back (e) {
        if (!e.keyCode || e.keyCode === 27) {
            this.props.history.push('/');
        }
    }

    render () {
        return (
            <div className='active-view' onKeyDown={this.back} tabIndex='0'>
                <div className='main'>
                    <div className='play'>
                        <div id="circularG">
                            <div id="circularG_1" className="circularG"/>
                            <div id="circularG_2" className="circularG"/>
                            <div id="circularG_3" className="circularG"/>
                            <div id="circularG_4" className="circularG"/>
                            <div id="circularG_5" className="circularG"/>
                            <div id="circularG_6" className="circularG"/>
                            <div id="circularG_7" className="circularG"/>
                            <div id="circularG_8" className="circularG"/>
                        </div>
                    </div>
                    <button className='back' onClick={this.back}>x</button>
                </div>
                <div className='sidebar'>
                    <img src={ this.thumb } alt={ this.name } className='active-view-thumb'/>
                    <div className='title'><h1>{ this.name }</h1></div>
                    <div className='description'>{ this.description }</div>
                </div>
            </div>
        )
    }
}

