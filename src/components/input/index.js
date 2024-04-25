import styled from "styled-components";

const InputComponent = styled.input`
    border: 1px solid #FFF;
    background: transparent;
    padding: 20px 140px;
    width: 200px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder{
        color: #FFF;
        fonst-size: 16px;
    }
`;    
export default InputComponent;