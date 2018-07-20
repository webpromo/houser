import React, { Component } from 'react';
// import './App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';



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

  updateProp(val){
    this.setState({
      property:val
    })
  }

  updateAddress(val){
    this.setState({
      address:val
    })
  }

  updateCity(val){
    this.setState({
      city:val
    })
  }

  updateState(val){
    this.setState({
      state:val
    })
  }

  updateZip(val){
    this.setState({
      zip:val
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
  <Link to='/dashboard'>  <button onClick={(e) => {this.props.addHouse()}}>Complete</button></Link>
  
</div>
    );
  }
}

export default Wizard;