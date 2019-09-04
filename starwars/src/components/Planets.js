import React from "react";
import styled from "styled-components";

const Div = styled.div`
font-family: 'Space Mono', monospace;
font-family: 'Press Start 2P', cursive;
display: flex;
justify-content: flex-end;
align-items: center;
`
const H1 = styled.h1`
color: #6A8EBB;
margin: 15px;
text-shadow: 1px 1px #B84417;
`
const H2 = styled.h2`
color: #72979F;
margin: 10px;
text-shadow: 2px 2px #76676C;
`
const H3 = styled.h3`
color: #C4C6B5;
margin: 5px;
text-shadow: 2px 2px #B8805C;
`

function Planets(props) {
    return (
        <Div>
            <H1>Name: {props.name}</H1>
            <H2>Rotation Period: {props.rotation_period}</H2>
            <H3> Diameter: {props.diameter}</H3>
        </Div>
    );
}

export default Planets;