import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import Navbar from 'components/nav/navbar'

class Nav extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      menuToggled: false
    }
  }

  render () {
    return (
      <Navbar />
    )
  }
}

export default withRouter(Nav)
