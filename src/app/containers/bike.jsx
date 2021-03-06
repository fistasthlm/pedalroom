import React, { Component } from 'react'
import { connect } from 'react-redux'
import BikeInfo from '../components/bikes/bike-info/bike-info'
import Loader from '../components/viewHelper/loader'
import { getBike, clearBike } from '../actions/bike-actions'

class Bike extends Component {
  componentWillMount () {
    this.loadBike()
  }

  componentWillUnmount () {
    this.props.clearBike()
  }

  loadBike () {
    const id = window.location.pathname.split('/')[2].split('?')[0]
    this.props.getBike(id)
  }

  render () {
    const { bikeState } = this.props
    const bike = bikeState.get('bike')

    if (bike.isEmpty()) {
      return (
        <Loader />
      )
    }

    return (
      <BikeInfo bike={bike} />
    )
  }
}

function propProvider (reduxState) {
  const { appState, bikeState } = reduxState

  return {
    appState,
    bikeState
  }
}

export default connect(propProvider, {
  getBike,
  clearBike
})(Bike)
