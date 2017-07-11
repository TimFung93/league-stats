import React, { Component } from 'react';






export default class Searchbar extends Component {



  render() {
  
     

     

    return (
      <div>
        <nav className="navbar navbar-light bg-faded justify-content-between">
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="text" placeolder="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>




      </div>
    );
  }
}

