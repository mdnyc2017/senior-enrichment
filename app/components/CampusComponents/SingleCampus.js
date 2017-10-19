/*
- Views: as a user I...
  * see details about a campus on the **Single Campus** view, including that campus's students
  

  */  

import React, { Component } from 'react';
import axios from 'axios';
import AllCampuses from './AllCampuses'
import AddStudent from '../StudentComponents/AddStudent'


export default class SingleCampus extends Component {

  constructor (props) {
    super(props);
    this.state = {
      campus: {},

    };
  }

  componentDidMount () {
    const id = this.props.match.params.campusId
    axios.get(`/api/campus/${id}`)
      .then(res => res.data)
      .then(campus => {
        console.log('campus is!!!!', campus)
        this.setState({ campus : campus })
      })
      .catch(error => console.error('error is: ', error))
    }

  render () {
    // {console.log('!!!!!!', this.state.campus)}
    //my students have a campusId. how do I use that to render the appropriate campus image?
    return (
      <div>
      <h1>Enrolled Students</h1>
      
      {
        this.state.campus.students && this.state.campus.students.map(student=>{
          return(
            <div>
              <img src={ this.state.campus.image } width="200" />
              <ol key={student.id}>
              <li>{student.name}</li>
              </ol>
            </div>
          )
        })
      }
      <AddStudent />
      </div>
    );
  }
}