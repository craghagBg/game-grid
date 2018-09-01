import React from 'react';
import '../Styles/GridView.css'
import { Link } from 'react-router-dom'
import tools from '../common/tools'
import Header from "./Header";

export default (props) => {
    if (tools.has(['category', 'games'], props)) {
        const games = props.category.games.map((game) => {
            const linkData = {
                pathname: '/active',
                state: { game }
            };
            const first = game.id === 1 ? 'first' : '';

            return (
                <div key={ game.id } className={ first }>
                    <Link to={ linkData }>
                        <img src={ game.thumb } alt={ game.name } className={first + 'thumb'}  />
                    </Link>
                    <div className='row'>{ game.name }</div>
                </div>
            )
        });

        return (
            <div>
                <Header title={props.category.title}/>
                <div className='grid-container'>
                    { games }
                </div>
            </div>
        )
    }
    else {
        const message = props.isFetch ? <h1 className='error'>No Data</h1> : '';
        return <div>{message}</div>
    }
};