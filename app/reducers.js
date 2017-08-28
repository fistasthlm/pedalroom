import { combineReducers } from 'redux';
import Immutable from 'immutable';

import { BIKE_LOADED, BIKES_LOADED, CLEAR_BIKE } from './actions/bike-actions';

function appState(state = Immutable.Map(), action = null) {
   switch (action.type) {
      default:
         return state;
   }
}

function bikeState(state = Immutable.Map({}), action = null) {
   switch (action.type) {
      case BIKES_LOADED:
         return state.merge({bikes: action.bikes});
      case BIKE_LOADED:
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
