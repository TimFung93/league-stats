import React, { Component } from 'react';





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
        <h1>You have reached main</h1>

      </div>
    );
  }
}

