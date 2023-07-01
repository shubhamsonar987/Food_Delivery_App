// import React from 'react'
// import {Link} from 'react-router-dom'

// export default function Navbar() {
//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand fs-1 fst-italic" to="/">GoFood</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <Link className="nav-link active" aria-current="page" href="/">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" href="/login">Login</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" href="/login">Signup</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>

//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div className="navbar-nav">
//         <a className="nav-link active" aria-current="page" href="#">Home</a>
//         <a className="nav-link" href="#">Features</a>
//         <a className="nav-link" href="#">Pricing</a>
//         <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//       </div>
//     </div>
//   </div>
// </nav>
//     )
// }
// ------------------------------ALI MALIK CODE-----------------

import React from "react";
import Footer from "./Footer";
import {Link, useNavigate} from "react-router-dom"
const Navbar=()=>{
  const navigate=useNavigate()
  const logout=()=>{
        localStorage.removeItem("token")
        navigate('/login')
  }
    return(<>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand fs-1" to="/sfae">Food order</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto me-auto mb-2 mb-lg-0">
       
        <li class="nav-item">
          <Link class="nav-link active fs-5" aria-current="page" to="/">Home</Link></li>
         { localStorage.getItem("token")?
        <div>
        <Link class="nav-link active fs-5" aria-current="page" to="/">my orders</Link></div>:<></>}
        
      
        
        </ul>
        {
       
        localStorage.getItem("token")?
        <div>
        
        <div className="btn btn-success mx-1">Cart</div><div className="btn btn-success mx-1" onClick={logout}>logout</div></div>
        :
        <div className="d-flex">
         <Link class="btn bg-white mx-1" to="/login">Login</Link>
          <Link class="btn bg-white mx-1" to='/signup'  >signup</Link>
        </div>
       
        }
    </div>
  </div>
</nav>
    </>)
}
export default Navbar