import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';




export default class Main extends Component {
  constructor() {
    super()

    this.state = {
      data: [],
      id: 0
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
    
    this.setState({
      id: event.target.value
    });


  }



  render() {
  
      const championData = this.state.data.data
     

      const getChampionData = function(){
        let championDataObject = {
          champions: []
        };
   
        for (let key in championData) {
          let champList = championData[key]
          for (let key in champList) {
            let champion = champList[key].name
            let championId = champList[key].id
            championDataObject.champions.push({name: champion,id: championId})
            
          }
        }
     
        return championDataObject.champions
       
      }


      let _championData = getChampionData();
      //console.log(championData)
      //console.log(_championData.champions)
     
      // let _championName = _championData.map(data => {
      //   return {data}
      // });

      // console.log(_championName)
      
    
      console.log(this.state)
  
      
      function champName(){
        let champName = []
        for (let i = 0; i < _championData.length; i++) {
           champName.push(_championData[i].name)           
        }
         return champName
      }

       function champId(){
        let champId = []
        for (let i = 0; i < _championData.length; i++) {
           champId.push(_championData[i].id)           
        }
         return champId
      }


      let _champName = champName()
      let _champId = champId()
   
      // console.log(imageList)
      // console.log(nameList)
      // console.log(idList)
      //console.log(_championName)

      // let __championTitle = titleList.map(data =>{
      //   return <p>{data}</p>
      // });
      let _____champName = Object.keys(_championData).forEach(function(key){
      
           let name = _championData[key].name
           console.log(_championData[key].name)
        
       
      });
   
  
      let __champId = _champId.map(id => {
        //when clicking name need to send id
        //needs to send an object
        return <div className='col-md-4'>
                <div className='card'><img src='https://images7.alphacoders.com/338/338697.png'/> 
                  <div className='card-container'> 
                    
                      <h3><Link to={`/${id}`} activeClassName="active" onClick={this.handleClick}>{id}</Link></h3>
                    
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
          {__champId}

          </div>
        </div>
        
        </div>
  
      </div>
    );
  }
}

