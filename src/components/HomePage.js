import React from 'react';
import styled from 'styled-components';

import image from "../images/illustration-editor-desktop.svg"

function HomePage() {
    return (
        <Container>
          
            <HomePageContent>
                <HomePageText>  <Title>Designed for the future</Title><h2> Introducing an extensible editor</h2>
                <p> Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog.</p>
  <h2> Introducing an extensible editor</h2>
                <p> Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog.</p>
  </HomePageText>
  <Image src={image} alt="log" />
            </HomePageContent>
            
        </Container>
    )
}

export default HomePage;


const Container= styled.div`
margin: 0 auto;
width: 90%;
color: hsl(237, 23%, 32%);
`;

const HomePageContent= styled.div`
display:flex;
align-items:center;`;

const Image= styled.img`
width:45%;`;

const HomePageText= styled.div`
margin-top:1em;`;

const Title= styled.h1`
margin-top:2em;`;