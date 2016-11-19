import React, { Component, PropTypes } from 'react';

export default class InstagramLink extends Component {
   render() {
      let { handle } = this.props;
      const url = 'https://www.instragram.com/' + handle + '/';
      handle = '@'+handle;

      return(
         <a href={url} target="_blank" className="instagram-link">
            {handle}
         </a>
      );
   }
}

InstagramLink.propTypes = {
   handle: PropTypes.string.isRequired
};
