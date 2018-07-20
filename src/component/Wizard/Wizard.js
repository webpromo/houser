import React, { Component } from 'react';
// import './App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
// import {connect} from 'react-redux';



export default class Wizard extends Component {

  addHouse(){
    let promise = axios.put('/api/houses')
    promise.then(res => {   
      return(res.data)
      })
    }

  
  render() {
    // const { 
    //   name, address, city, state, zip
    // } = this.props;
    return (

<div id="parent"> 

  <div>
  <Link to='/dashboard'><button className="cancel">Cancel</button></Link>
  </div>

  <Link to='/dashboard'>  <button onClick={(e) => {this.props.addHouse()}}>Complete</button></Link>
  
</div>
    );
  }
}

// function mapStateToProps( state ) {
//   return state;
// }

// export default connect( mapStateToProps, { name, address, city,state,zip} )( Wizard );