import React, { Component } from 'react';
import axios from 'axios';



const Champion = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)


export default Champion


