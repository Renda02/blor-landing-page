import NavBar from "./components/NavBar";
import styled from 'styled-components'
import HomePage from "./components/HomePage";


function App() {
  return (
    <MainContainer>
    <NavBar/>
    <HomePage/>
    </MainContainer>
  );
}

export default App;

const MainContainer= styled.div`
font-size:1rem;
width:90%;
margin: 0 auto;
min-width: 1440px;
`;
