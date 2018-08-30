import React, {Component} from 'react';
import '../Styles/Header.css'

/**
 *
 */
class Header extends Component {
    render() {
        return (
            <div className='App-Header'>
                {this.props.title}
            </div>
        );
    }
}

export default Header;
