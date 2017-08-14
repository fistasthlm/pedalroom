import React from 'react';
import PropTypes from 'prop-types';

export default function InstagramLink({ handle }) {
   const url = 'https://www.instagram.com/' + handle + '/';
   handle = '@' + handle;

   return (
      <a href={url} target="_blank" className="instagram-link">
         {handle}
      </a>
   );
}

InstagramLink.propTypes = {
   handle: PropTypes.string.isRequired
};
