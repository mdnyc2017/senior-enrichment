import React, {Component} from 'react'
import axios from 'axios'


export default class AddStudent extends Component{
    constructor(props){
        super(props)
        this.state={
            newStudentName: '',
            newStudentEmail: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        // const id = this.props.match.params.studentId
        const updatedStudent={
            name: this.state.newStudentName,
            email: this.state.newStudentEmail
        }
        axios.post('/api/student/', updatedStudent)
        .then(res => res.data)
        .then(result=>console.log('result is: ', result))
        .catch(err => console.error('error is: ', err))
    }


    handleChange(event){
        const value= event.target.value;
        const name = event.target.name;
        this.setState({
            [name]:value
        })
    }

render(){
    return(
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <label>
        New Student Name:
            <div>
                <input type="text" name="newStudentName" />
            </div>
        </label>
        <label>
        New Student Email:
            <div>
                <input type="text" name="newStudentEmail" />
            </div>
        </label>
        <button type="submit">Submit</button>
        </form>
        )
    }
}