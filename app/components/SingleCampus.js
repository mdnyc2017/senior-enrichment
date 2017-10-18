/*
- Views: as a user I...
  * see details about a campus on the **Single Campus** view, including that campus's students
  

  */  

import React, { Component } from 'react';
import axios from 'axios';
import AllCampuses from './AllCampuses';

export default class SingleCampus extends Component {

  constructor (props) {
    super(props);
    this.state = {
      campus: []
    };
  }

  componentDidMount () {
    axios.get('/api/campus/')
      .then(res => res.data)
      .then(campus => {
        this.setState({ campus })
      });
  }

  render () {

    const campus = this.state.campus;

    return (
      <AllCampuses campus={campus} />
    );
  }
}