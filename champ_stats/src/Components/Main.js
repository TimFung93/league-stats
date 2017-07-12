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


  handleClick(event) {
    console.log('this linked as clicked')
    event.preventDefault();
  }



  render() {
  
      const championData = this.state.data.data
     

      const getChampionData = function(){
        let championDataArray = [];
        let champion;
   
        for (let key in championData) {
          let champList = championData[key]
          for (let key in champList) {
            champion = champList[key]
            championDataArray.push(champion)
            
          }
        }
     
        return championDataArray
       
      }

      let _championData = getChampionData();

       let getNameList = function() {
        let nameList = []
        for (let key in _championData) {
          let nameOfChamp = _championData[key].name
          nameList.push(nameOfChamp)
        }
        return nameList
      }


       let getIdList = function() {
        let idList = []
        for (let key in _championData) {
          let nameOfChamp = _championData[key].id
          idList.push(nameOfChamp)
        }
        return idList
      }
      
      
     



      let nameList = getNameList()
      let idList = getIdList()


      

     

      console.log(nameList)
      console.log(idList)
      //console.log(_championName)
      
      let __championName = nameList.map(data => {

        return <div className='col-md-4'>
                <div className='card'><img src='#'/> 
                  <div className='card-container'> 
                    <a href='/' className ='card' onClick={this.handleClick}> 
                      <p>{data}</p>
                    </a> 
                  </div>
                </div>
              </div>
      });


      
       // console.log(this.state.data)

       // const champName = championData.map(key => {
       //  return key
       // });

       // console.log(champName)

     

    return (
      <div>
        <div className='App'>
        <h1>You have reached main</h1>
        <div className='container'> 
          <div className='row'>
          {__championName}
          </div>
        </div>
        
        </div>
      </div>
    );
  }
}

