import React, { Component } from 'react';






export default class Champion extends Component {




  render() {
    console.log(this.props.location)
    console.log(this.props)
  
      // let _championStat = getChampionStats();

      // let __championStat = _championStat.map(stat => {
      //    return <a href="/:id" onClick={this.handleClick}> <p>{stat}</p> </a>
      //  });

      //once i get id can use in query and make a call to the invidivual champion page with all stats
     

    return (
      <div>
        <h1>You have reached the champion page</h1>
        <h1>{this.props.match.params.id}</h1>
      </div>
    );
  }
}

