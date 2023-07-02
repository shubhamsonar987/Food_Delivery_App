// import React from 'react'
// import {Link} from 'react-router-dom'

// export default function Navbar() {
//     return (
//         <div>
//             <nav className Name="navbar navbar-expand-lg navbar-dark bg-success">
//                 <div className Name="container-fluid">
//                     <Link className Name="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
//                     <button className Name="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className Name="navbar-toggler-icon"></span>
//                     </button>
//                     <div className Name="collapse navbar-collapse" id="navbarNav">
//                         <ul className Name="navbar-nav">
//                             <li className Name="nav-item">
//                                 <Link className Name="nav-link active" aria-current="page" href="/">Home</Link>
//                             </li>
//                             <li className Name="nav-item">
//                                 <Link className Name="nav-link" href="/login">Login</Link>
//                             </li>
//                             <li className Name="nav-item">
//                                 <Link className Name="nav-link" href="/login">Signup</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>

//         <nav className Name="navbar navbar-expand-lg navbar-light bg-light">
//   <div className Name="container-fluid">
//     <a className Name="navbar-brand" href="#">Navbar</a>
//     <button className Name="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span className Name="navbar-toggler-icon"></span>
//     </button>
//     <div className Name="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div className Name="navbar-nav">
//         <a className Name="nav-link active" aria-current="page" href="#">Home</a>
//         <a className Name="nav-link" href="#">Features</a>
//         <a className Name="nav-link" href="#">Pricing</a>
//         <a className Name="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//       </div>
//     </div>
//   </div>
// </nav>
//     )
// }
// ------------------------------ALI MALIK CODE-----------------

import React from "react";
// import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("authToken")
    navigate('/login')
  }
  return (<>
    <nav className="navbar navbar-expand-lg navbar-green bg-green">
      <div className="container-fluid">
        <Link className="navbar-brand fs-1" to="/sfae">Go Foodie</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="btn btn-success mx-1" aria-current="page" to="/">Home</Link>
            </li>
            {localStorage.getItem("authToken") ?

              <li className="nav-item">
                <Link className="btn btn-success mx-1" aria-current="page" to="/">my orders</Link></li>
              : ""}
          </ul>
          {

            (!localStorage.getItem("authToken")) ?
              <div className="d-flex">
                <Link className="btn bg-white mx-1" to="/login">Login</Link>
                <Link className="btn bg-white mx-1" to='/signup'  >signup</Link>
              </div>
              :
              <div>
                <div className="btn btn-success mx-1">My Cart</div>
                <div className="btn btn-danger mx-1" onClick={logout}>logout</div>
              </div>




          }
          
        </div>
      </div>
    </nav>
  </>)
}

export default Navbar