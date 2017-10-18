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


const AllCampuses = (props) =>{
    const campuses = props.campuses;
    return (
        <div>
          <h3>Campus</h3>
          <div className="row">
            {
              AllCampuses.map(campus => (
                <div className="col-xs-4" key={ campus.id }>
                  <Link className="thumbnail" to={`/campus/${campus.id}`}>
                    <img src={ campus.image } />
                    <div className="caption">
                      <h5>
                        <span>{ campus.name }</span>
                      </h5>
                    </div>
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      );
    };
    
export default AllCampuses;









