import React, { Component } from 'react';
import axios from 'axios';






export default class Champion extends Component {


  shouldComponentUpdate(nextProps) { 
    console.log(nextProps)
    if(this.props.clicked === true) {
      return true
    }
    
  }

  render() {


    console.log(this.props)
     

    return (

      <div>
          <h1>{this.props.match.params.id}</h1>
          <h1>You have reached champion page</h1>
      </div>
      
    );
  }
}





