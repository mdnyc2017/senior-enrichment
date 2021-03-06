/*
- Views: as a user I...
  * see details about a campus on the **Single Campus** view, including that campus's students
  

  */  

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {render} from 'react-dom'


import AllCampuses from './AllCampuses'
import AddStudent from '../StudentComponents/AddStudent'
import UpdateStudent from '../StudentComponents/UpdateStudent'
import DeleteStudent from '../StudentComponents/DeleteStudent'
import SingleStudent from '../StudentComponents/SingleStudent'

export default class SingleCampus extends Component {

  constructor (props) {
    super(props);
    this.state = {
      campus: [],
      students: []
    };
  }

  componentDidMount () {
    const id = this.props.match.params.campusId
    axios.get(`/api/campus/${id}`)
      .then(res => res.data)
      .then(campus => {
        console.log('campus is!!!!', campus)
        this.setState({ 
          campus : campus,
          students : campus.students
        })
      })
      .catch(error => console.error('error is: ', error))
    }

  addStudent(addedStudent){
    const newStudentArr = this.state.campus.students.slice()
    const newObj = Object.assign({}, this.state.campus, {students: newStudentArr})

    newStudentArr.push(addedStudent)

    this.setState({
      campus : newObj
    })
  }

  updateStudent(updatedStudent){
    const newStudentArr = this.state.campus.students.slice()
    const indexToBeUpdated = newStudentArr.findIndex((student)=> Number(updatedStudent.id) === Number(student.id));
    // const newObj = Object.assign({}, this.state.campus, {students: newStudentArr})

    newStudentArr[indexToBeUpdated] = updatedStudent
    
    this.setState({
      students: newStudentArr
    })
  }

  deleteAStudent(studentIdToDelete){
    const newStudentArr = this.state.students.filter((student)=>{
      return student.id !== studentIdToDelete
    })
    const newObj = Object.assign({}, this.state.campus, {students: newStudentArr})
    this.setState({
      campus: newObj
    })
  }

  render () {
    return (
      <div>
        <h1>{this.state.campus.name}  </h1>
        <h2>Campus ID: {this.state.campus.id}</h2>
        <img src={ this.state.campus.image } width="200" />
        <br/>
        <h3>Enrolled Students</h3>
        <ol>
          {
            this.state.campus.students && this.state.campus.students.map(student=>{
              return(
                <div key={student.id}>
                <Link to={`/students/${student.id}`}>
                    <li key={student.id}>{student.name}</li>   
                    <ul>email: {student.email}</ul>  
                    <ul>Id Number: {student.id}</ul> 
                </Link>
                </div>       
              )
            })
          }
        </ol>
        <h2>Add Student Here</h2>
        <AddStudent id={this.props.match.params.campusId} add={this.addStudent.bind(this)}/>
        <br/>
        <h2>Update Students Here</h2>
        <UpdateStudent update={this.updateStudent.bind(this)}/>
        <br/>
        <DeleteStudent delete={this.deleteAStudent.bind(this)} />
      </div>
    );
  }
}


