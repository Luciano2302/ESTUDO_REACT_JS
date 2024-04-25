import Icons from '../icones/index.js'; 
import Logo from '../logo/index.js';
import Opcoes from '../opcoes/index.js';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  background-color: #FFF;
  justify-content: center;
`;

function Header(){
    return(
       <HeaderContainer>
         <Logo/>
         <Opcoes/> 
         <Icons/>
       </HeaderContainer>
    );
}

export default Header;