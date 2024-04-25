import Header from './components/header/index.js';
import styled from 'styled-components';
import PesquisaContainer from './components/pesquisa/index.js';
import UltimosLancamentos from './components/ultimoslancamentos/index.js';
import CardRecomenda from './components/cardrecomenda/index.js';
import imagem from './images/livro.png';

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
      <UltimosLancamentos />
      <CardRecomenda 
        titulo="Teste"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação"
        imagem={imagem}
      />
    </AppContainer>
  );
}

export default App;
