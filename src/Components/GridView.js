import React, { Component } from 'react';
import '../Styles/GridView.css'
import { Link } from 'react-router-dom'
import Header from "./Header";

class GridView extends Component {
    render() {
        if (this.props.category && this.props.category.games) {
            const games = this.props.category.games.map((game) => {
                const linkData = {
                    pathname: '/active',
                    state: { game }
                };

                return (
                    <div key={ game.id } className={ 'game-' + game.id }>
                        <Link to={ linkData }>
                            <img src={ game.thumb } alt={ game.name }/>
                        </Link>
                        <div className='row'>{ game.name }</div>
                    </div>
                )
            });

            return (
                <div>
                    <Header title={this.props.category.title}/>
                    <div className='container'>
                        { games }
                    </div>
                </div>
            )
        }
        else {
            const message = this.props.isFetch ? <h1>No Data</h1> : '';
            return <div>{message}</div>
        }
    }
}

export default GridView