import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import BikeGrid from '../components/bikes/bike-grid/bike-grid'
import Loader from '../components/viewHelper/loader'
import { getBikes } from '../actions/bike-actions'

class Bikes extends PureComponent {
  componentDidMount () {
    if (this.props.bikes.isEmpty()) {
      this.props.getBikes()
    }
  }

  render () {
    const { bikes } = this.props

    if (bikes.isEmpty()) {
      return <Loader />
    }

    return (
      <BikeGrid bikes={bikes} />
    )
  }
}

function propProvider (state) {
  const { bikeState } = state
  return {
    bikes: bikeState.get('bikes')
  }
}

export default connect(propProvider, {
  getBikes
})(Bikes)
