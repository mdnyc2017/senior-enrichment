/*
- Views: as a user I...
* see details about a student on the **Single Student** view, including that student's campus
*/
import React, { Component } from 'react';
import axios from 'axios';
import AllStudentss from './AllStudents';

export default class SingleStudent extends Component {
    
      constructor (props) {
        super(props);
        this.state = {
          student: []
        };
      }
    
      componentDidMount () {
        axios.get('/api/student/')
          .then(res => res.data)
          .then(student => {
            this.setState({ student })
          });
      }
    
      render () {
    
        const student = this.state.student;
    
        return (
          <AllStudents student={student} />
        );
      }
    }