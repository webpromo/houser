import React, { Component } from 'react';
// import './App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import { updateProp, updateAddress, updateCity, updateState,updateZip } from "./ducks/counter";



class Wizard extends Component {
  constructor(){
    super()
    this.state={
      property:"",
      address:"",
      city:"",
      state: "",
      zip: 0
    }
  }

  addHouse(){
    let promise = axios.put('/api/houses')
    promise.then(res => {   
      return(res.data)
      })
    }

  render() {
    const { 
        name, address, city, state, zip
      } = this.props;
    return (

<div id="parent"> 

{console.log("Props: "+props)}
  <div className="wizard-fields">
      <input className="property-name" placeholder="Property name" type="text" onChange={(e) => this.updateProp(e.target.value)} value={this.state.property}/>
      <input className="address" placeholder="Address" type="text" onChange={(e) => this.updateAddress(e.target.value)} value={this.state.address}/>
      <input className="city" placeholder="City" type="text" onChange={(e) => this.updateCity(e.target.value)} value={this.state.city}/>
      <input className="state" type="text" onChange={(e) => this.updateState(e.target.value)} value={this.state.state}/>
      <input className="zip" type="text" onChange={(e) => this.updateZip(e.target.value)} value={this.state.zip}/>

  </div>
  <Link to='/dashboard'>  <button onClick={(e) => {this.props.addHouse()}}>Complete</button></Link>
  
</div>
    );
  }
}

function mapStateToProps( state ) {
    return state;
  }
  
  export default connect( mapStateToProps, { name, address, city, state, zip } )( Wizard );