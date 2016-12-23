import React, { Component, PropType } from 'react';
import { IndexLink } from 'react-router';
import InstagramLink from '../viewHelper/instagram-link';

export default class Bike extends Component {
   render() {
      const biek = {
            id: 1,
            title: 'Cinelli Laser Corsa',
            member: 'discobiker'
         };

      return (
         <div className="bike">
            <IndexLink to="/bikes">
               Back to bieks
            </IndexLink>
            <br/>

            <h2>{biek.title}</h2>
            <img src="../paralaxi.jpg" />

            <div>
               About biek, balablalflalbalb
            </div>

            <InstagramLink handle={biek.member} />
         </div>
      );
   }
}

Bike.propTypes = {};
