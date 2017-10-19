
import React, { Component } from 'react';
import {render} from 'react-dom'
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom'
//browserrouter app demo: https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
import axios from 'axios'

import NavComponent from './Navbar';
//campus react components:
import AllCampuses from './AllCampuses'
import SingleCampus from './SingleCampus'
import UpdateCampus from './UpdateCampus'
import AddCampus from './AddCampus'

//student react components:
import AllStudents from './AllStudents'
import SingleStudent from './SingleStudent'
import AddStudent from './AddStudent'
import UpdateStudent from './UpdateStudent'

const Main = function(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/campus/:campusId' component={SingleCampus} />
                <Route exact path='/students' component={AllStudents}/>
                <Route exact path='/editStudent/:studentId' component={UpdateStudent}/>
                <Route exact path='/editCampus/:campusId' component={UpdateCampus} />
                <Route exact path='/enlist' component={AddStudent}  />
                <Route exact path='/addCampus' component={AddCampus} />
                <Route exact path='/student/:studentId' component={SingleStudent}/>
                <Route path='/' component={AllCampuses} />
            </Switch>
        </BrowserRouter>
        
    )
}
Render(
    <Main />, 
    document.getElementById('main')
)




// <Router>
//         <div id="main" className="container-fluid">
//           <div className="col-xs-2">
//             <NavComponent />
//           </div>
//           <div className="col-xs-10">
//             <Switch>
//               <Route exact path="/campus" render={() => <AllCampuses campus={[]} />} />
//               <Route path="/campus/:id" component={SingleCampus} />
//               <Route exact path="/students" component={AllStudents} />
//               <Route path="/students/:id" component={SingleStudent} />
//               <Route path ='/' component={AllCampuses} />
//             </Switch>
//           </div>
//         </div>
//     </Router>

// export default class Main extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             Students : [],
//             Campus : [],
//             selectedStudent : null,
//             selectedCampus :null
//         }
//     }
    
//     selectCampus(){
     
//     }
    
//     createCampus(){
    
//     }
    
//     updateCampus(){
    
//     }
    
//     deleteCampus(){
    
//     }
    
//     selectStudent(){
    
//     }
//     createStudent(){
        
//     }
    
//     updateStudent(){
    
//     }
    
//     deleteStudent(){
    
//     }
//     componentDidMount(){
//         axios.get('/campus')
//         .then(res=>res.data)
//        .then(campuses=>{
//            campuses.forEach(campus=>{
//                campus.image = `/api/campus/${album.image}`
//            })
//            return campuses
//        })
//        .then(albums => this.setState({campuses : campuses}))
//     }
    
    
    
//       render () {
//           const campuses= this.state.Campus
//           console.log('!!!! campuses', campuses)
//         return (
//         <div>
//             {
//                 campuses.map(campus => (
//                 <div className="campuses" key={ campus.id }>
//                     <Link className="linkToCampuses" to={`/campus/${campus.id}`}>
//                     <img src={ campus.image } width="200" />
//                     <div className="caption">
//                         <h5>
//                         <span>{ campus.name }</span>
//                         </h5>
//                     </div>
//                     </Link>
//                 </div>
//                 ))
//             }
//         </div>
//         )
//       }
//     }