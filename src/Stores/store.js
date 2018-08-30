import EventEmitter from 'events'
import dispatcher from '../dispatcher'
import data from '../grid-app-data'

class Store extends EventEmitter {

    /**
     * Fire change event and send the data to all listeners.
     */
    getData () {
        const { categories } = data;
        this.emit('change', { categories });
    }

    /**
     *
     * @param {Object} action
     */
    handleAction (action) {
        switch (action.type) {
            case 'FETCH_DATA': {
                this.getData()
            } break;

            default: break
        }
    }
}

let store = new Store();

dispatcher.register(store.handleAction.bind(store));

export default store