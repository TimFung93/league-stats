import React, { Component } from 'react';
import axios from 'axios';





export default class Main extends Component {
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
        let championArray = [];
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
      
      const getChampionStats = function() {
        let championStats = []; 
        let stat;
        for (let key in championData) {
          let statList = championData[key]
          for (let stat in statList) {
            stat = statList[stat].stats
            championStats.push(stat)

          }
        }
        console.log(championStats)
        return championStats
      }




      let _championName = getChampionName();

      
      let __championName = _championName.map(data => {
        return <a href='/' onClick={this.handleClick}> <p>{data}</p></a>
      });


      
       // console.log(this.state.data)

       // const champName = championData.map(key => {
       //  return key
       // });

       // console.log(champName)

     

    return (
      <div className="App">
        <h1>You have reached main</h1>
        <div className='container'> 
          <div className='row'>
            <div className='col-md-12'>
              {__championName}

            </div>
          </div>
        </div>
        

      </div>
    );
  }
}

