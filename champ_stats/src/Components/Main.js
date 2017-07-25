import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';




export default class Main extends Component {


  handleChange() {
    this.props.data
  }

  handleClick(event) {

    console.log('button has been clicked')

  }



  render() {
    
    console.log(this.props)

      const championData = this.props.data
   


      const getChampionData = function() {
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

    
      
      function champName(){
        let champName = []
        for (let i = 0; i < _championData.length; i++) {
          if(_championData[i].name !== undefined) {
            champName.push(_championData[i].name)           
          }
        }
         return champName
      }

       function champId(){
        let champId = []
        for (let i = 0; i < _championData.length; i++) {
          if(_championData[i].id !== undefined) {
            champId.push(_championData[i].id)           
          }
        }
         return champId
      }


      let _champName = champName()
      let _champId = champId()
   
   
      // let _____champName = Object.keys(_championData).forEach(function(key){
      
      //      let name = _championData[key].name
      //      console.log(_championData[key].name)
        
       
      // });
   
  
      let __champId = _champId.map(id => {
        //when clicking name need to send id
        //needs to send an object
        return <div className='col-md-4'>
                <div className='card'><img src='https://images7.alphacoders.com/338/338697.png'/> 
                  <div className='card-container'> 
                
                      <h3><Link to={`/champion/${id}`} 
                                activeClassName="active" 
                                onClick={this.handleClick.bind(this)}>{id}

                      </Link></h3>
                    
                  </div>
                </div>
              </div>
      });

  

     

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

