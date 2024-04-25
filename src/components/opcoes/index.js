import styled from 'styled-components';
const options = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

const OpcoesComponente = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  display: flex;
  font-size: 16px;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 0 5px;
  min-width: 120px;
  cursor: pointer;
`;

function Opcoes() {
  return(
    <OpcoesComponente>
    { options.map((texto) => (
      <Opcao><p>{texto}</p></Opcao>
    ))}
   </OpcoesComponente>
  );
}

export default Opcoes;