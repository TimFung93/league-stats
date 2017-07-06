import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor() {
    super()

    this.state = {
      data: [],
      value: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }


  componentWillMount(){
    axios.get('http://localhost:8080/')
      .catch(err => {
        console.log(err);
      })
      .then(res => {
        if (res.status !== 200) {
          throw "Network Error"
        } else {
          this.setState({
            data: res
          });
        }
        
      })
  };


  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


  handleClick() {
    console.log('this linked as clicked')
  }



  render() {
  
      const championData = this.state.data.data
     

      const getChampionName = function(){
        let championArray = []
        let champion;
        for (let key in championData) {
          let champList = championData[key]
          for (let key in champList) {
            champion = champList[key].name
            championArray.push(champion)
            
          }
        }

        return championArray
       
      }




      let _championName = getChampionName()
      
      let __championName = _championName.map(data => {
        return <a href="/:id" onClick={this.handleClick}> <p>{data}</p> </a>
      });



      
       // console.log(this.state.data)

       // const champName = championData.map(key => {
       //  return key
       // });

       // console.log(champName)

     

    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <form onSubmit={this.handleSubmit}>
          <label>Search Champion 
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {__championName}
      </div>
    );
  }
}

export default App;
