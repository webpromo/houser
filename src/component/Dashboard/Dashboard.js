
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import House from '../House/House';

class Dashboard extends Component {
  constructor(){
    super()
    this.state={
      housesList:[
       { property:"Test One",
        address:"asdf",
        city:"asdf",
        state: "UT",
        zip: 84653
      },
      { property:"Test Two",
      address:"asdf",
      city:"asdf",
      state: "UT",
      zip: 84651
    }
      ]
    }
  }
  render() {
    let showList = this.state.housesList.map((house,i) => {
     return (
       <div className="one-listing">
       <span key={i} className="listing">Property name: {this.state.housesList[i].property}<br /></span>
       <span key={i} className="listing">Address: {this.state.housesList[i].address}<br /></span>
       <span key={i} className="listing">City: {this.state.housesList[i].city}<br /></span>
       <span key={i} className="listing">State: {this.state.housesList[i].state}<br /></span>
       <span key={i} className="listing">Zip: {this.state.housesList[i].zip}<br /></span>
       </div>
     ) 
    });
    return (

<div id="parent"> 
{console.log("Made it!")}
    <div>
    <Link to='/wizard'><button >Add New Property</button></Link>
    </div>
    <div className="listAll">{showList}</div>
</div>
    );
  }
}

export default Dashboard;