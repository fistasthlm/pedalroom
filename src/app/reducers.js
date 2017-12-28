import { combineReducers } from 'redux';
import { fromJS } from 'immutable';

import { BIKE_LOADED, BIKES_LOADED, CLEAR_BIKE } from './actions/bike-actions';

function appState(state = fromJS({}), action = null) {
   switch (action.type) {
      default:
         return state;
   }
}

function bikeState(state = fromJS({
   bikes: {},
   bike: {}
}), action = null) {
   switch (action.type) {
      case BIKES_LOADED:
         return state.merge({bikes: action.bikes});
      case BIKE_LOADED:
         return state.merge({bike: action.bike});
      case CLEAR_BIKE:
         return state.merge({bike: {}});
      default:
         return state;
   }
}

const rootReducer = combineReducers({
   appState,
   bikeState
});

export default rootReducer;
