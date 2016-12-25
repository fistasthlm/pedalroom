import { initClient } from '../../utils/cms';

export const GET_BIKES = 'GET_BIKES';
export const GET_BIKE = 'GET_BIKE';

function getBikesSuccess(data) {
   return {
      type: GET_BIKES,
      bikes: data
   }
}

function getBikeSuccess(data) {
   console.log('action', data);
   return {
      type: GET_BIKE,
      bike: data
   }
}

export function getBike(id) {
   const client = initClient();

   return dispatch => {
      client.getEntry(id)
         .then(entry => {
            dispatch(getBikeSuccess(entry));
         })
         .catch(error => {
            console.log(error);
         })
   }
}

export function getBikes() {
   let client = initClient();
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
