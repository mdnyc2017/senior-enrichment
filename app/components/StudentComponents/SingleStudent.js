/*
- Views: as a user I...
* see details about a student on the **Single Student** view, including that student's campus
*/
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {render} from 'react-dom'


import AllStudentss from './AllStudents';
import AddStudent from  './AddStudent'
import UpdateStudent from './UpdateStudent'
import DeleteStudent from './DeleteStudent'

export default class SingleStudent extends Component {
    
      constructor (props) {
        super(props);
        this.state = {
          student: []
        };
      }
    
      componentDidMount () {
        const id = this.props.match.params.studentId     
        console.log('!!! const id is: ', id)   
        axios.get(`/api/students/${id}`)
          .then(res => res.data)
          .then(student => {
            this.setState({ 
              student : student 
            })
          })
          .catch(error => console.error('error is: ', error))          
      }
    
      render () {
        console.log('this.state.student is: ', this.state.student)
        // console.log('this.state.campus is: ', this.state.campus)
        return (
          <div>
            <h2>Selected Student</h2>
            <h3>{this.state.student.name}</h3>
            <li>email: {this.state.student.email}</li>   
            <li>ID Number: {this.state.student.id}</li>
            <Link to={`/campus/${this.state.student.campusId}`}>
            <li>Enrolled at Campus ID#: {this.state.student.campusId}</li>
            </Link>
            <img src={ this.state.campus } width="200" />
          </div>
        );
      }
    }

  //   <div>
  //       <br/>
  //       <h3>Enrolled Students</h3>
  //       <ol>
  //                   <li key={student.id}>{student.name}</li>   
  //                   <ul>email: {student.email}</ul>  
  //                   <ul>Id Number: {student.id}</ul> 
  //       </ol>
  //       <h2>Add Student Here</h2>
  //       <AddStudent id={this.props.match.params.campusId} add={this.addStudent.bind(this)}/>
  //       <br/>
  //       <h2>Update Students Here</h2>
  //       <UpdateStudent update={this.updateStudent.bind(this)}/>
  //       <br/>
  //       <DeleteStudent delete={this.deleteAStudent.bind(this)} />
  // </div>



//    <h1>{this.state.student}</h1>
//    <img src={ this.state.campus.image } width="200" />

// <h2>Campus ID: {this.state.student.campusId}</h2>
