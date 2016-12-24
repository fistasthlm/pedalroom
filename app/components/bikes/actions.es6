import { initClient } from '../../utils/cms';

export const GET_BIKES = 'GET_BIKES';

function getBikesSuccess(data) {
   return {
      type: GET_BIKES,
      bikes: data
   }
}

export function getBikesFromCms() {
   let client = initClient();

   client.getEntries({content_type: 'bike'})
      .then(entries => {
         console.log(entries.items);
         return dispatch => {
            dispatch(getBikesSuccess(entries.items));
         }
      })
      .catch(error => {
         console.log(error);
      })
}
