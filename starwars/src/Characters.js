import React from "react";

function Characters(props) {
    return (
        <div>
            <h1>Character: {props.name}</h1> 
            <h2>Height: {props.height}</h2>
            <h3>Mass: {props.mass} </h3>
            <h4>Hair Color: {props.hair_color}</h4>
        </div>

    );
}

export default Characters;