import React from 'react';
import ReactDOM from 'react-dom/client';
// import { useState } from 'react';
import './index.css';
import App from './App';
// import StarRating from './StarRating';

// function Test() {
//   const [movieRating, setmovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxrating={10} onSetRating={setmovieRating}/>
//       <p>This Movie was Rated {movieRating} stars</p>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    {/* <StarRating maxrating={5}
    messages={
      ["terriable", "Bad","Okay","Good", "Amazing" ]}/>

    <StarRating 
    maxrating={10} color='red' size='24' defaultRating = {3}/>.

    <Test/> */}
  </React.StrictMode>
);
