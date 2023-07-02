// import React from 'react'

// export default function Card() {
//     return (
//         <div>  <div>
//             <div className="card" style={{ "width": "18rem", "maxweight": "360px" }}>
//                 <img src="https://media.istockphoto.com/id/1048349618/photo/vegetables-and-fruits-on-the-market.jpg?s=2048x2048&w=is&k=20&c=HwZ3zSdB2RN9h-Zq1a2dnRyJlz5y_qfl3018E1XNm6A=" className="card-img-top" alt="..." />
//                 <div className="card-body">
//                     <h5 className="card-title">Card title</h5>
//                     <p className="card-text">This is some important text.</p>
//                     <div className='container w-100'>
//                         <select className='m-2 h-100  bg-success'>
//                             {Array.from(Array(6), (e, i) => {
//                                 return (
//                                     <option key={i + 1} value={i + 1}> {i + 1} </option>
//                                 )
//                             })}
//                         </select>

//                         <select className='m-2 h-100  bg-success rounded'>
//                             <option value="half">Half</option>
//                             <option value="half">Full</option>
//                         </select>


//                         <div className='d-inline h-100 fs-5'>
//                             Total Price
//                         </div>
//                     </div>

//                 </div>
//             </div></div>
//         </div>
//     )
// }



// --------------------ALI MALIK-------------------
import React from "react";
const Card=(props)=>{
   return( <div class="card m-2" style={{"width": "15rem"}}>
   <img src={props.data3.img} class="card-img-top " style={{height:"120px",objectFit:"fill"}} alt="..."/>
   <div class="card-body">
     <p class="card-text">{props.data3.name} </p>
     <div className="container w-100"><select className="m-2  h-100 bg-gradient rounded-3" name="list" id="">{Array.from(Array(6),(e,i)=>{
        return(<><option key={i+1} value={i+1}>{i+1}</option></>)
     })}</select>
     <select name="" className="m-2  h-100 bg-gradient rounded-3" id=""><option value="half">half</option><option value="half">half</option></select>
     <div className="d-inline fs-5">Total Price : {props.data3.price}</div>
    
     </div>
     <hr />
     <button className="btn btn-success justify-center ms-2"> <i class="bi bi-cart-plus"></i>
add cart</button>
   </div>
   
 </div>)
}
export default Card
