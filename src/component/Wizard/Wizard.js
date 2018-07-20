import React, { Component } from 'react';
// import './App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
// import {connect} from 'react-redux';



export default class Wizard extends Component {
  constructor(){
    super()
    this.state={
      property:"",
      address:"",
      city:"",
      state: "",
      zip: 0
    }
    this.addHouse = this.addHouse.bind(this);
  }

  // addHouse(){
  //   axios.put('/api/houses',
  // {
  //   name:this.property,
  //   address:this.address,
  //   city:this.city,
  //   state:this.state,
  //   zip:this.zip
  // })
  //   .then(res => {   
  //     return(res.data)
  //     })

  //   }

    addHouse(){
      let promise = axios.put('/api/houses',
    {
      name:this.property,
      address:this.address,
      city:this.city,
      state:this.state,
      zip:this.zip
    })
      promise.then(res => {   
        return(res.data)
        })
      }
  

    updateProp(prop){
      this.setState({
        property:prop
      })
    }
    updateAddress(address){
      this.setState({
        address:address
      })
    }
    updateCity(city){
      this.setState({
        city
      })
    }
    updateState(state){
      this.setState({
        state
      })
    }
    updateZip(zip){
      this.setState({
        zip
      })
    }
  
  render() {
    // const { 
    //   property, address, city, state, zip
    // } = this.props;
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
  {/* <Link to='/dashboard'>  */}<button onClick={() => this.addHouse()}>Complete</button>{/* </Link>  */}

</div>
    );
  }
}

// function mapStateToProps( state ) {
//   return state;
// }

// export default connect( mapStateToProps, { name, address, city,state,zip} )( Wizard );