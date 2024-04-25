
import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import styled from 'styled-components';

const icons = [perfil, sacola];

const Icones = styled.ul`
  display: flex;
`;

const Icone = styled.li`
  display: flex;
  font-size: 16px;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 0 5px;
  cursor: pointer;
`;

function Icons(){   
    return(
       <Icones>
          { icons.map((texto) => (
            <Icone><img src={texto} alt='icones'></img></Icone>
          ))}
        </Icones>
   );
}

export default Icons;