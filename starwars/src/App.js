import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Characters from "./components/Characters";
import Planets from "./components/Planets";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


const [ starWarsPeople, setStarWarsPeople ] = useState([]);
const [ starWarsPlanets, setStarWarsPlanets ] = useState([]);

	useEffect(() => {
		axios
			.get('https://swapi.co/api/people/')
			.then((res) => {
				setStarWarsPeople(res.data.results);
        console.log(res.data.results);
			})
			.catch((error) => 
      {console.log(error)
      });
	}, []);

  	useEffect(() => {
		axios
			.get('https://swapi.co/api/planets/')
			.then((res) => {
				setStarWarsPlanets(res.data.results);
        console.log(res.data.results);
			})
			.catch((error) => 
      {console.log(error)
      });
	}, []);

  

	return (
  <div className="App"> {starWarsPeople.map((name) => 
  <Characters name={name.name} key={name.name} height={name.height}
  mass={name.mass} hair_color={name.hair_color} />)}
  {starWarsPlanets.map((names) => <Planets name={names.name} key={names.name}
  rotation_period={names.rotation_period} diameter={names.diameter}/>)}

  
  
  </div>
  );
}




export default App;
