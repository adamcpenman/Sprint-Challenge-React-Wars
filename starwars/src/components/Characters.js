import React from "react";
import styled from "styled-components";
// import Crawl from 'react-star-wars-crawl';
// import 'react-star-wars-crawl/lib/index.css';

const Div = styled.div`
font-family: 'Press Start 2P', cursive;
font-family: 'Space Mono', monospace;
display: flex;
justify-content: flex-start;
align-items: center;
margin-bottom: 5px;
`
const H1 = styled.h1`
color: #6A8EBB;
margin: 15px;
text-shadow: 1px 1px #B84417;
`
const H2 = styled.h2`
color: #B8805C;
margin: 10px;
text-shadow: 1px 1px #76676C;
`
const H3 = styled.h3`
color: #C4C6B5;
margin: 5px;
text-shadow: 2px 2px #B8805C;
`
const H4 = styled.h4`
color: #B84417;
margin: 5px;
text-shadow: 1px 1px #6A8EBB;
`


function Characters(props) {
    return (
        <Div>
            {/* <Crawl> */}
                <H1>Character: {props.name}</H1> 
                <H2>Height: {props.height}</H2>
                <H3>Mass: {props.mass} </H3>
                <H4>Hair Color: {props.hair_color}</H4>
            {/* </Crawl> */}
        </Div>

    );
}

export default Characters;