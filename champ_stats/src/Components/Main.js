import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';




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
        let nameList = [];
        for (let key in _championData) {
          let nameOfChamp = _championData[key].name
          if (nameOfChamp !== undefined) {
            nameList.push(nameOfChamp)
          }
        }
        return nameList
      }

      let getImageList = function() {
        let imageList = [];
        for (let key in _championData) {
          let imageChamp = _championData[key].image
          imageList.push(imageChamp)
        }
        return imageList
      }


      let getIdList = function() {
        let idList = []
        for (let key in _championData) {
          let nameOfChamp = _championData[key].id
          idList.push(nameOfChamp)
        }
        return idList
      }
      
       let getTitleList = function() {
        let titleList = [];
        for (let key in _championData) {
          let titleChamp = _championData[key].title
          titleList.push(titleChamp)
        }
        return titleList
      }
      
     

      const titleList = getTitleList();
      const imageList = getImageList();
      const nameList = getNameList();
      const idList = getIdList();


      

     
      // console.log(imageList)
      // console.log(nameList)
      // console.log(idList)
      //console.log(_championName)

      let __championTitle = titleList.map(data =>{
        return <p>{data}</p>
      });

      console.log(titleList)
      console.log(__championTitle)
      let __championName = nameList.map(name => {

        return <div className='col-md-4'>
                <div className='card'><img src='https://images7.alphacoders.com/338/338697.png'/> 
                  <div className='card-container'> 
                    <a onClick={this.handleClick}> 
                      <h3><Link to='/champion'>{name}</Link></h3>
                  


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

