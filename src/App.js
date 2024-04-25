import Header from './components/header/index.js';
import styled from 'styled-components';
import PesquisaContainer from './components/pesquisa/index.js';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`;

function App() {
  return (
    <AppContainer>  
      <Header/>
      <PesquisaContainer />
    </AppContainer>
  );
}

export default App;
