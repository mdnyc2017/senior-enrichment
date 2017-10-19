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
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteCampus from './DeleteCampus' //makes sense to have delete button on list of all campuses

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
        allCampuses: allCampusesFromDatase
      })
    })
    .catch(err=> console.error('error is: ', error))
  }
 
  render(){
  return (
        <div>
          <ol>
            {this.state.allCampuses && this.state.allCampuses.map(campus=>{
              return(
                <div key={campus.id}>
                  <DeleteCampus delete={campus.id} /> //each campus is mapped with delete functionality
                  <Link to={`/campus/${campus.id}`}>
                  <span>{campus.name}</span>
                  <img src={ campus.image } width="200" />
                  </Link>
                </div>
              )
            })}
          </ol>
        </div>
      );
    };
  }
    
export default AllCampuses;









// this structure is from Juke, dan said not to use it but I'm storing it here for reference:


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