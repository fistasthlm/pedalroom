import { combineReducers } from 'redux';
import Immutable from 'immutable';

import { GET_BIKES, GET_BIKE, CLEAR_BIKE } from './components/bikes/actions';

function appState(state = Immutable.Map(), action = null) {
   switch (action.type) {
      default:
         return state;
   }
}

function bikeState(state = Immutable.Map({
   bikes: [],
   bike: {}
}), action = null) {

   switch (action.type) {
      case GET_BIKES:
         return state.merge({bikes: action.bikes});
      case GET_BIKE:
         return state.merge({bike: action.bike});
      case CLEAR_BIKE:
         return state.merge({bike: {}});
         break;
      default:
         return state;
   }
}

const rootReducer = combineReducers({
   appState,
   bikeState
});

export default rootReducer;
