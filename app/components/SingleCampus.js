/*
- Views: as a user I...
  * see details about a campus on the **Single Campus** view, including that campus's students
  

  */  

import React, { Component } from 'react';
import axios from 'axios';

export default class SingleCampus extends Component {

  constructor (props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount () {
    const id = this.props.match.params.campusId
    axios.get('/api/campus/${id}')
      .then(res => res.data)
      .then(campus => {
        this.setState({ students : campus })
      })
      .catch(error => console.error('error is: ', error))
    }

  render () {
    // {console.log('!!!!!!', this.state.campus)}
    return (
      <div>
      <h1>Enrolled Students</h1>
      {
        this.state.students && this.state.students.map(student=>{
          return(
            <ol key={student.id}>
            <li>{student.name}</li>
            </ol>
          )
        })
      }
      </div>
    );
  }
}