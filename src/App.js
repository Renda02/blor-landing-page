import NavBar from "./components/NavBar";
import styled from 'styled-components'


function App() {
  return (
    <MainContainer>
    <NavBar/>
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
