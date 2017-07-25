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
    axios.get('http://localhost:8080/champion/:id' ,{
      params: {
        id: parseInt(this.props.match.params.id)
      }
    })
    .then(res => {
      console.log(res)
      this.setState({
        data: res
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
 





  render() {
  
      // {const Champion = ({ match }) => (
      //   {match.params.id}
        

     console.log(this.state)
     

    return (

      <div>
          <h1>{this.props.match.params.id}</h1>
          <h1>You have reached champion page</h1>
      </div>
      
    );
  }
}





