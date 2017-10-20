/*navbar needs at least two buttons 
one for home (renders all campuses)
one for students
one for campuses (renders all campuses, only works when we are viewing students or an individual campus)

- Navigation: as a user I...
  * will land on **Home** by default
  * can navigate to **Campuses** from **Home**
  * can navigate to **Students** from **Home**
  * can navigate to view a **Single Campus** from **Campuses**
  * can navigate to view a **Single Student** from **Students**
  * can navigate to view a **Single Student** from **Single Campus** (for any student at that campus)
  * can navigate to view that student's **Single Campus** from **Single Student**

  */

import React, { Component } from 'react';

export default class NavComponent extends Component {
        
    render() {
      return (
        <div>
          <nav>
          <div className="navWide">
              <div className="wideDiv">
                  <a href="/">Home Base</a>
              </div>
          </div>
          </nav>
        </div>
      )
    }
  }