import React, { Component, PropTypes } from 'react';

export default class InstragramLink extends Component {
   render() {
      let { handle } = this.props;
      const url = 'https://www.instragram.com/' + handle;

      return(
         <a href={url} className="instagram-link" />
      );
   }
}

InstragramLink.propTypes = {
   handle: PropTypes.string.isRequired
};