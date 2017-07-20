import React, { Component } from 'react';
import axios from 'axios';






export default class Champion extends Component {

  constructor(props) {
    super(props)

    this.setState = {
      data: []
    }

  }

  componentDidMount() {
    axios.get('http://localhost:8080')
      .then(res => {
        this.setState({
          data: res
        });
      })
      .catch(err => {
        console.log(err)
      });
  }





  render() {
  
      // {const Champion = ({ match }) => (
      //   {match.params.id}
        
     

    return (

      <div>
          <h1>{this.props.match.params.id}</h1>
        </div>
      
    );
  }
}





