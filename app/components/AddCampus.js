import React, {Component} from 'react'
import axios from 'axios'

export default class AddCampus extends Component{
    constructor(props){
     super(props)
     this.state = {
         newCampusName: '',
         newCampusImage: ''
     }
     this.handleSubmit = this.handleSubmit.bind(this)
     this.handleChange = this.handleChange.bind(this)
    }

handleSubmit(event){
    event.preventDefault();
    const newCampus ={
        name: this.state.newCampusName,
        image: this.state.newCampusImage
    }
    axios.post('/api/campus', newCampus)
    .then(res=>{
        res.data
    })
    .then(result=>{
        console.log('result is', result) //npm axios docs example console logged post request results
    })
    .catch(error=>console.log('error is: ', error))
}

handleChange(event){
    const value = event.target.value;
    const name = event.target.name
    this.setState({
        [name]: value //ask fellow why this needs to be in brackets
    })
}
render(){
    return(
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <label>
            Campus Name:
                <div>
                    <input type="text" name="newCampusName" />
                </div>
            </label>
            <label>
            Image URL:
                <div>
                    <input type="text" name="newCampusImage" />
                </div>
            </label>
            <input type="submit" value="Submit" />
        </form>







    )

  }

}