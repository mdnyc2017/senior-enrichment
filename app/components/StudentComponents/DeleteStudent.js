import React, {Component} from 'react'
import axios from 'axios'

export default class DeleteStudent extends Component{
    constructor(props){
        super(props)
        this.state={
            studentToDelete: props.delete
        }
        this.deleteStudent = this.deleteStudent.bind(this)
    }
    deleteStudent(){
        const id = this.state.studentToDelete;
        axios.delete(`/api/student/${id}`)
        .catch(err => console.error('error is: ', err))
    }

    render(){
        return(
            <button onClick={this.deleteStudent}>
            Delete Student
            </button>
        )
    }

}