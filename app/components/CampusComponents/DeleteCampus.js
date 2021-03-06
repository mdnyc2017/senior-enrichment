import React, {Component} from 'react'
import axios from 'axios'

export default class DeleteCampus extends Component{
    constructor(props){
        super(props)
        this.state={
            campusToDelete: props.delete
        }
        this.deleteCampus = this.deleteCampus.bind(this)
    }
    deleteCampus(){
        const id = this.state.campusToDelete;
        this.props.deleteFromState(id)
        axios.delete(`/api/campus/${id}`)
        .catch(error => console.error('error is: ', error))
    }
    render(){
     return(
        <button onClick={this.deleteCampus}> 
        Delete campus
        </button>
     )  
    }
}