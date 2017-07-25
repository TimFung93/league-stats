import React, { Component } from 'react';
import Main from './Main';
import Champion from './Champion';
import axios from 'axios';





export default class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: []
    }

  }

  componentWillMount(){
    this.fetchData()
  }

  fetchData() {
    axios.get('http://localhost:8080/')
      .then(res => {
        console.log(res)
        this.setState({
          data: res
        });
      }).catch(err => {
        console.log(err)
      })
  };
  

  fetchSingleData() {
    axios.get('http://localhost:8080/champion/:id' ,{
      params: {
        id: this.props.match.params.id
      }
    })
    .then(res => {
      console.log(res)
      this.setState({
        data: res
      });
    }).catch(err => {
      console.log(err)
    })
  };



  render() {
    

  
    return (
      <div className="App">
        <h1>You have reached Header</h1>

        <div className="col-md-12"> 
          <p>Picture</p>
        </div>

        <div>
          {this.props.children}
          <Main data={this.state.data.data}/>
          

        </div>



      </div>
    );
  }
}

