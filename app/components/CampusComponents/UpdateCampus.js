import React, {Component} from 'react'
import axios from 'axios'

export default class UpdateCampus extends Component{
    constructor(props){
        super(props)
        this.state ={
            newCampusName: '',
            newCampusImage: '',
            id: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    handleSubmit(event){
        event.preventDefault();
        const id = this.state.id; 
        const updatedCampus ={
            name: this.state.newCampusName,
            image: this.state.newCampusImage,
            id: this.state.id
        }
        console.log('!!! this.state is: ', this.state)
        this.props.update(updatedCampus)
        axios.put(`/api/campus/${id}`, updatedCampus )
        .then(res => res.data)
        .then(result => console.log('result is: ', result))
        .catch(err=> console.error('error is: ', err))        
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
             Campus Id to be Updated:
                <div>
                    <input type="text" name="id" />
                </div>
            </label>
            <label>
            New Campus Name:
                <div>
                    <input type="text" name="newCampusName" />
                </div>
            </label>
            <label>
            New Campus Image:
                <div>
                    <input type="text" name="newCampusImage" />
                </div>
            </label>
            <input type="submit" value="Submit" />
        </form>
     )
    }
}