
import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import House from '../House/House';



class Dashboard extends Component {
  render() {
    return (

<div id="parent"> 

  <div>
  <Link to='/wizard'><button >Add New Property</button></Link>
  </div>

</div>
    );
  }
}

export default Dashboard;