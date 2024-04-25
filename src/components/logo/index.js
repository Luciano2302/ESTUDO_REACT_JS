import logo from '../../images/logo.svg';
import styled from 'styled-components';

const LogoComponent = styled.div`
  display: flex;
  font-size: 30px;
  gap: 10px;
`;

const ImageComponent = styled.img`
 margin-left: 5px;
`;

function Logo(){
    return (
      <LogoComponent>
        <ImageComponent src={logo}  alt="logo"/>
        <p><strong>Alura Books</strong></p>  
      </LogoComponent>    
    );
}

export default Logo;
