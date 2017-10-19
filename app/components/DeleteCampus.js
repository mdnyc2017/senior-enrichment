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
        axios.delete(`/api/campus/${id}`)
        .catch(error => console.log('error is: ', error))
    }
    render(){
     return(
        <button onClick={this.deleteCampus}> 
        Delete campus
        </button>
     )  
    }
}