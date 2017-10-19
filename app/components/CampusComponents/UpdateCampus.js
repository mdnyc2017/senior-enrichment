import React, {Component} from 'react'
import axios from 'axios'

export default class UpdateCampus extends Component{
    constructor(props){
        super(props)
        this.state ={
            newCampusName: '',
            newCampusImage: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    handleSubmit(event){
        event.preventDefault();
        const id = this.props.match.campusId //this.props.campusId was undefined
        const updatedCampus ={
            name: this.state.newCampusName,
            image: this.state.newCampusImage
        }
        axios.put(`/api/campus/${id}`, updatedCampus )
        .then(res => res.data)
        .then(result => console.log('result is: ', result))
        .catch(err=> console.error('error is: ', error))        
    }

    handleChange(event){
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    render(){
     return(
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <label>
            Update Campus Name:
                <div>
                    <input type="text" name="newCampusName" />
                </div>
            </label>
            <label>
            Update Campus Image:
                <div>
                    <input type="text" name="newCampusImage" />
                </div>
            </label>
        </form>
     )
    }
}