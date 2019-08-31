import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Characters from "./Characters";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [starWarsPeople, setStarWarsPeople] = useState ();

  // function App() {
  // const [nasaImage, setNasaImage] = useState();
  // const [nasaTitle, setNasaTitle] = useState();
  // const [nasaBody, setNasaBody] = useState();
  // const [nasaMedia, setNasaMedia] = useState();

const [ names, setNames ] = useState([]);

	useEffect(() => {
		axios
			.get('https://swapi.co/api/people/')
			.then((res) => {
				setNames(res.data.results);
			})
			.catch((error) => 
      {console.log(error)
      });
	}, []);

	return <div className="App">{names.map((name) => 
  <Characters name={name.name} key={name.name} height={name.height}
  mass={name.mass} hair_color={name.hair_color} />)}
  
  </div>;
}


//   return (
//     <div className="App">
//       <h1 className="Header">React Wars</h1>
//      <Characters name={starWarsPeople}></Characters>
//     </div>
//   );
// }

export default App;
