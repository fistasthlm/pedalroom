import { combineReducers } from 'redux';
import Immutable from 'immutable';

import { GET_BIKES } from './components/bikes/actions';

function appState(state = Immutable.Map({}), action = null) {
   switch (action.type) {
      default:
         return state;
   }
}

function bikeState(state = Immutable.Map({
   bikes: []
}), action = null) {
   switch (action.type) {
      case GET_BIKES:
         return state.merge(action.bikes);
      default:
         return state;
   }
}

const rootReducer = combineReducers({
   appState,
   bikeState
});

export default rootReducer;
