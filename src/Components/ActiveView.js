import React, {Component} from 'react';
import store from '../Stores/store'
import '../Styles/ActiveView.css'

class ActiveView extends Component {
    /**
     *
     * @param props
     */
    constructor(props){
        super(props);

        this.state = {};
    }

    componentWillUnmount () {
        store.removeListener('change', this.onChange)
    }

    render () {
        return (
            <div >
            </div>
        )
    }
}

export default ActiveView;
