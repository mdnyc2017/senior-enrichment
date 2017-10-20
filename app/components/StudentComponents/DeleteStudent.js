import React, {Component} from 'react'
import axios from 'axios'

export default class DeleteStudent extends Component{
    constructor(props){
        super(props)
        this.state={
            studentIdToDelete: props.delete
        }
        this.deleteStudent = this.deleteStudent.bind(this)
    }
    deleteStudent(){
        const id = this.state.studentToDelete;
        this.props.delete(id)
        axios.delete(`/api/student/${id}`)
        .catch(err => console.error('error is: ', err))
    }

    render(){
        return(
        <form onSubmit={this.deleteStudent}>
            <label>
             Student ID to be Deleted
                <div>
                    <input type="text" name="studentToDelete" />
                </div>
            </label>
            <input type="submit" value="Submit" />
        </form>
        )
    }
}



{/* <button onClick={this.deleteStudent}>
Delete Student by Id
</button> */}