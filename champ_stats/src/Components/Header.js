import React, { Component } from 'react';
import Main from './Main';
import Champion from './Champion';
import axios from 'axios';





export default class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: [],
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.fetchSingleData = this.fetchSingleData.bind(this)
  }

  componentWillMount(){
    this.fetchData()
  }



  handleClick() {
    console.log('I have been clicked')
    this.setState({
      clicked: true
    });
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

    console.log(this.state.clicked)

    return (
      <div className="App">
        <h1>You have reached Header</h1>
        <div className="col-md-12"> 
          <p>Picture</p>
        </div>
        <div>
          <Main data={this.state.data.data} clicked={this.handleClick}/>
        </div>



      </div>
    );
  }
}

