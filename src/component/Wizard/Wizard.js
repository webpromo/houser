import React, { Component } from 'react';
// import './App.css';
import {Link} from 'react-router-dom';



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
  
  updateProp(val){
    this.setState({
      property:val
    })
  }

  render() {
  
    return (

<div id="parent"> 

  <div>
  <Link to='/dashboard'><button className="cancel">Cancel</button></Link>
  </div>
  <div className="wizard-fields">
      <input className="property-name" placeholder="Property name" type="text" onChange={(e) => this.updateProp(e.target.value)} value={this.state.property}/>
      <input className="address" placeholder="Address" type="text" onChange={(e) => this.updateAddress(e.target.value)} value={this.state.address}/>
      <input className="city" placeholder="City" type="text" onChange={(e) => this.updateCity(e.target.value)} value={this.state.city}/>
      <input className="state" type="text" onChange={(e) => this.updateState(e.target.value)} value={this.state.state}/>
      <input className="zip" type="text" onChange={(e) => this.updateZip(e.target.value)} value={this.state.zip}/>

  </div>

</div>
    );
  }
}

export default Wizard;