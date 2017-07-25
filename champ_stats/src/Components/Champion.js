import React, { Component } from 'react';
import axios from 'axios';






export default class Champion extends Component {

  constructor(props) {
    super(props)

    this.State = {
      data: []
    }

  }

  componentWillMount() {
    console.log('get this data to appear on console please')
  }
 





  render() {
  
      // {const Champion = ({ match }) => (
      //   {match.params.id}
        

     console.log(this.props)
     

    return (

      <div>
          <h1>{this.props.match.params.id}</h1>
          <h1>You have reached champion page</h1>
      </div>
      
    );
  }
}





