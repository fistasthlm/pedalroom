import React, {PropTypes, Component } from 'react';
import Image from '../../components/viewHelper/image';

export default class BikePhotos extends Component {
   renderThumbnails(images) {
      return (
         <div className="image-thumbnails">
            {
               images.map((image, index) => {
                  return <Image className="thumbnail"
                                url={image[index].fields.file.url}
                                resize={true}
                                width={20}
                                height={20} />;
               })
            }
         </div>
      );
   }

   render() {
      const { images } = this.props;
      return(
         <div className="photos">
            <Image className="big-picture" url={images[0].fields.file.url} width="800" height="800" resize={true} />
            {
               images.length > 1 &&
                  this.renderThumbnails(images)
            }
         </div>
      );
   }
}
