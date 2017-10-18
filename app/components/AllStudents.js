/*
- Views: as a user I...

  * see a list of all students on the **Students** view

  */

import React, { Component } from 'react';
const AllStudents = (props) =>{
    const students = props.students;
    return (
        <div>
          <h3>Students</h3>
          <div className="row">
            {
              AllStudents.map(student => (
                <div className="col-xs-4" key={ student.id }>
                  <Link className="thumbnail" to={`/student/${student.id}`}>
                    <div className="caption">
                      <h5>
                        <span>{ student.name }</span>
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

