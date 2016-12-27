import React, { Component, PropTypes } from 'react';

export default class Image extends Component {
   render() {
      const { imgId, imgName, className } = this.props;
      const src = 'https://images.contentful.com/x1j0zkbk3421/' +
                  imgId + '/66256a7ec6c12ea8f8d1d88bbcafe6ea/' + imgName + '.png';
      return(
         <img className={className} src={src} alt={this.props.caption || ''}/>
      )
   }
}

Image.propTypes = {
   imgId: PropTypes.string.isRequired,
   imgName: PropTypes.string.isRequired,
   className: PropTypes.string
};
