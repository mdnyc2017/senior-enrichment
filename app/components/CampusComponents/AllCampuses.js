/*
this is the "home view"
should show all campuses
should also include for to add person (ajax.create)
should also include form to assign person created to a campus

- Views: as a user I...
  * see a list of all campuses on the **Campuses** view
- Actions: as a user I...
  * can create a campus
  * can edit a campus's info, including adding/removing a student to/from that campus
  * can delete a campus
  * can create a student
  * can edit a student's info, including the campus that student is assigned to
  * can delete a student

  */

import React, { Component } from 'react';
import {render} from 'react-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';

import DeleteCampus from './DeleteCampus' 
import AddCampus from './AddCampus'
import UpdateCampus from './UpdateCampus'

export default class AllCampuses extends Component {
  constructor(props){
    super(props);
    this.state = {
      allCampuses: [],
      selectedCampus: '',
    }
   
  }
  
  componentDidMount(){
    axios.get('/api/campus')
    .then(res=> res.data)
    .then(allCampusesFromDatabase=>{
      this.setState({
        allCampuses: allCampusesFromDatabase
      })
    })
    .catch(err=> console.error('error is: ', err))
  }

  updateCampus(updatedCampus){
    const newAllCampusArr = this.state.allCampuses.slice()
    const indexToBeUpdated = newAllCampusArr.findIndex((campus)=> Number(updatedCampus.id) === Number(campus.id));
    console.log('indexToBeUpdated is: ', indexToBeUpdated)
    newAllCampusArr[indexToBeUpdated]=updatedCampus
    console.log('newAllCampusArr is: ', newAllCampusArr)
    this.setState({
      allCampuses: newAllCampusArr
    })
  }

  addCampus(newCampus){
    const newAllCampusArr = this.state.allCampuses.slice()
    newAllCampusArr.push(newCampus)
    this.setState({
      allCampuses: newAllCampusArr
    })    
  }

  deleteCampus(idToDelete){
    const newAllCampusArr = this.state.allCampuses.filter((campus)=>{
      return campus.id !== idToDelete
    })
    this.setState({
      allCampuses: newAllCampusArr
    })    
  }

  render(){
    console.log('this.state.allCampuses', this.state.allCampuses)
  return (
        <div>
          <ol>
            {this.state.allCampuses && this.state.allCampuses.map(campus=>{
              return(
                <div key={campus.id}>
                  <Link to={`/campus/${campus.id}`}>
                    <br />
                    <span>{campus.name}</span>
                    <br />
                    <img src={ campus.image } width="200" />
                    <br />
                  </Link>
                  <DeleteCampus delete={campus.id} deleteFromState={this.deleteCampus.bind(this)}/>
                  <br />
                </div>
              )
            })}
          </ol>
          <h2>Add Campus Here:</h2>
          <AddCampus add={(campusToAdd) => this.addCampus(campusToAdd)}/>
          <br/>
          <h2>Update Campus Here:</h2>
          <UpdateCampus update={(updatedCampus)=>this.updateCampus(updatedCampus)}/>
        </div>
      );
    };
  }
    



//   <div>
//   <h1>{this.state.campus.name}  </h1>
//   <img src={ this.state.campus.image } width="200" />
//   <br/>
//   <h3>Enrolled Students</h3>
//   <ol >
//     <Link to={`/student/${student.id}`}>
//     {
//       this.state.campus.students && this.state.campus.students.map(student=>{
//         return(
//           <div>
//               <li key={student.id}>{student.name}</li>   
//               <li>{student.email}</li>  
//           </div>       
//         )
//       })
//     }
//     </Link>
//   </ol>
//   <h2>Add Student Here</h2>
//   <AddStudent id={this.props.match.params.campusId} add={this.addStudent.bind(this)}/>
//   <br/>
//   <h2>Update Students Here</h2>
//   <UpdateStudent update={this.updateStudent.bind(this)}/>
//   <br/>
// </div>
// );






// this structure is from Juke, dan said not to use it but I'm storing it here for reference:

{/* <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
<label>
Add Campus Name:
  <div>
    <input type="text" name="props.newCampusName" />
  </div>
</label>
<label>
Add Campus Image URL:
  <div>
    <input type="text" name="props.newCampusImage" />
  </div>
</label>
<button type="submit">Submit</button>
</form> */}

{/* <ol> */}
// <Link to={'/addCampus'}>Add Campus</Link>
// {
//   this.state.AllCampuses.map(campus =>{
//     return (
//       <div key={campus.id}>
//         <Link className="thumbnail" to={`/campus/${campus.id}`}>
//         <img src={ campus.image } width="200" />
//         <div className="caption">
//         <h5>
//         <span>{ campus.name }</span>
//         </h5>
//         <h6>
//           <button onClick={this.DeleteCampus}>Delete Campus</button>
//         </h6>
//       </div>
//       </Link>
//       </div>
//     )
//   })
// }
// </ol>