import React, { Component } from 'react';
import {render} from 'react-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';
  
import AddStudent from './AddStudent'
import UpdateStudent from './UpdateStudent'
import DeleteStudent from './DeleteStudent'
  
export default class AllStudents extends Component{
  constructor(props){
    super(props);
    this.state={
      allStudents: []
    }
  }

  componentDidMount(){
    axios.get('/api/students')
    .then(res=> res.data)
    .then(allStudentsFromDatabase=>{
      this.setState({
        allStudents: allStudentsFromDatabase
      })
    })
    .catch(err=> console.error('error is: ', err))
  }

    render() {
      return(
        <div>
          <h3>All Students</h3>
            {
              this.state.allStudents.map(student => (
                <div key={ student.id }>
                  <Link className="thumbnail" to={`/students/${student.id}`}>
                    <li key={student.id}> {student.name} </li>   
                    <ul>email: {student.email}</ul>  
                    <ul>Id Number: {student.id}</ul> 
                  </Link>
                </div>
              ))
            }
        </div>
      )
      };
    };
    

