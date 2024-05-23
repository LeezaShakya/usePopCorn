import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import StarRating from './StarRating.jsx'
//use the value from one component to another by passing the set component
// function Test(){
//   const [movieRating , setMovieRating] = useState(0)
//   return(
//     <div>
//       <StarRating setMovieRating = {setMovieRating}/>
//       <p>The Movie is {movieRating} rated</p>
//     </div>
//   )
// }
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* when we have set some of the value */}
    {/* <StarRating maxRating={6} defaultRating={5} color={"red"} size={24}/> */}
    {/* when we have not set any of the value and hance the value we have define within the StarRating function will be dispalyed*/}
    {/* <StarRating/> */}
    {/* <Test/> */}
    <App />
  </React.StrictMode>,
)
