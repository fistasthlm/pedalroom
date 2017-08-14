import React, { PureComponent } from 'react';
import Image from '../../components/viewHelper/image';
import Lightbox from 'react-image-lightbox';

export default class BikePhotos extends PureComponent {
   constructor(props) {
      super(props);

      this.state = {
         isOpen: false,
         photoIndex: 0
      };
   }

   renderThumbnails(images) {
      return (
         <div className="image-thumbnails">
            {
               images.map((image, index) => {
                  return(
                     <div key={index}>
                        <Image className="thumbnail"
                               url={image.fields.file.url}
                               resize={true}
                               width="300"
                               height="300" />
                     </div>
                  );
               })
            }
         </div>
      );
   }

   toggleLightBox() {
      this.setState({isOpen: !this.state.isOpen});
   }

   previousImage() {
      const { images } = this.props;
      const { photoIndex } = this.state;

      this.setState({
         photoIndex: (photoIndex + images.length - 1) % images.length,
      });
   }

   nextImage() {
      const { images } = this.props;
      const { photoIndex } = this.state;

      this.setState({
         photoIndex: (photoIndex + 1) % images.length,
      });
   }

   render() {
      const { images } = this.props;
      const { isOpen, photoIndex } = this.state;
      return(
         <div className="photos">
            {
               images &&
                  <div onClick={this.toggleLightBox.bind(this)}>
                     <Image className="big-picture"
                            url={images[0].fields.file.url}
                            width="800"
                            height="800"
                            resize={true} />
                     {
                        images.length > 1 &&
                           this.renderThumbnails(images)
                     }
                  </div>

            }
            {
               isOpen &&
                  <Lightbox mainSrc={images[photoIndex].fields.file.url}
                            nextSrc={images[(photoIndex + 1) % images.length].fields.file.url}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length].fields.file.url}
                            onMovePrevRequest={this.previousImage.bind(this)}
                            onMoveNextRequest={this.nextImage.bind(this)}
                            onCloseRequest={this.toggleLightBox.bind(this)}
                            discourageDownloads={true}
                            enableZoom={false} />
            }
         </div>
      );
   }
}
