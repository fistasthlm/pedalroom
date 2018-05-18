import { getJson } from '../utils/network'
import { networkProgress } from '../actions'

export const CLEAR_BIKE = 'CLEAR_BIKE'
export const BIKES_LOADED = 'BIKES_LOADED'
export const BIKE_LOADED = 'BIKE_LOADED'

function bikesLoaded (data) {
  return {
    bikes: data,
    type: BIKES_LOADED
  }
}

function bikeLoaded (data) {
  return {
    bike: data,
    type: BIKE_LOADED
  }
}

export function clearBike () {
  return dispatch => {
    dispatch({
      type: CLEAR_BIKE
    })
  }
}

export function getBike (id) {
  return dispatch => {
    dispatch(networkProgress())
    return getJson('/bike/' + id)
      .then(response => {
        dispatch(bikeLoaded(response.data))
      })
      .catch(error => {
        console.log('Something went wrong', error)
      })
  }
}

export function getBikes (page) {
  return dispath => {
    dispath(networkProgress())
    return getJson('/bikes/')
      .then(response => {
        dispath(bikesLoaded(response.data))
      })
      .catch(error => {
        console.log('Something went wrong', error)
      })
  }
}
