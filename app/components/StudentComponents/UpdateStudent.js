import React, {Component} from 'react'
import axios from 'axios'

export default class UpdateStudent extends Component{
    constructor(props){
        super(props)
        this.state={
            newStudentName:'',
            newStudentEmail:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()
        const id = this.props.match.studentId
        const updatedStudent = {
            name: this.state.newStudentName,
            email: this.state.newStudentEmail
        }
        axios.put(`/api/student/${id}`, updatedStudent)
        .then(res => res.data)
        .then(result => console.log('result is: ', result))
        .catch(err=>console.error('error is: ', err))
    }
    handleChange(event){
        const value = event.target.value
        const name = event.target.name
        this.setState({
            [name]:value
        })
    }

    render(){
        return(
            <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                <label>
                Update Student Name
                    <div>
                        <input type="text" name="newStudentName" />
                    </div>
                </label>
                <label>
                Update Student Email
                    <div>
                        <input type="text" name="newStudentEmail" />
                    </div>
                </label>
            </form>
        )
    }
    





}