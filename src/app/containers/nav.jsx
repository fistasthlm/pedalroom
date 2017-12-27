import React, { PureComponent } from 'react';
import Navbar from 'components/nav/navbar';

export default class Nav extends PureComponent {
   constructor(props) {
      super(props);

      this.state = {
         menuToggled: false,
      };
   }

   render() {
      return (
         <Navbar />
      );
   }
}
