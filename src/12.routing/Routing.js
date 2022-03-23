import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import StudentMongoAPI from '../11.api-calls/StudentMongoAPI'
import StudentSQLAPI from '../11.api-calls/StudentSQLAPI'
import UserAPI from '../11.api-calls/UserAPI'
import NameListThree from '../7.list-rendering/NameListThree'

const Home = () => <div className="container"><h1>Welcome Home</h1></div>
const About = () => <div><h1>About Page</h1></div>
const Contact = () => <div><h1>Contact Page</h1></div>
const ErrorPage = () => <div><h1>Page Not Found, contact administrator</h1></div>

function Routing() {
  return (
    <div>
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand">React Masters</Link>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-item nav-link active">Home</Link>
                                <Link to="/users" className="nav-item nav-link">Users</Link>
                                <Link to="/students" className="nav-item nav-link">Students</Link>
                                <Link to="/customers" className="nav-item nav-link">Customers</Link>
                            </div>
                        </div>
                    </div>
                </nav>                
            </div>
            {/* <div className="container">
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/about">About</Link></li>
                    <li> <Link to="/contact">Contact</Link></li>
                </ul>
            </div> */}
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/users' element={<UserAPI />}></Route>
                <Route path='/students' element={<StudentMongoAPI />}></Route>
                <Route path='/customers' element={<NameListThree />}></Route>
                <Route path='*' element={<ErrorPage />}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Routing