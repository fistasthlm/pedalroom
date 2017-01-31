import { initClient } from '../../utils/cms';
import { networkProgress } from '../../actions';

export const GET_BIKES = 'GET_BIKES';
export const GET_BIKE = 'GET_BIKE';

function getBikesSuccess(data) {
   return {
      type: GET_BIKES,
      bikes: data
   }
}

function getBikeSuccess(data) {
   return {
      type: GET_BIKE,
      bike: data
   }
}

export function getBike(id) {
   const client = initClient();
   return dispatch => {
      client.getEntries({'sys.id': id})
         .then(response => {
            dispatch(getBikeSuccess(response.items[0]));
         })
         .catch(error => {
            console.log(error);
         })
   }
}

export function getBikes() {
   const client = initClient();
   return dispatch => {
      client.getEntries({content_type: 'bike'})
         .then(entries => {
            dispatch(getBikesSuccess(entries.items));
         })
         .catch(error => {
            console.log(error);
         });
   }
}
