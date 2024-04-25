import styled from "styled-components";
import Livros from "../ultimoslancamentos/ultimoslancamentos.js";

const UltimosLancamentosContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

function UltimosLancamentos(){
    return(
      <UltimosLancamentosContainer>
        <h2>Ultimos Lançamentos</h2>
         {Livros.map(livro => {
           return <img src={livro.src} alt="Livro Lançamento" />
        })}
       </UltimosLancamentosContainer>
    );
}

export default UltimosLancamentos;