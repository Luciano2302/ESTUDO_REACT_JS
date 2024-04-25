import styled from "styled-components";
import Input from "../input/index.js";
import { useState } from "react";
import { livros } from "./dadosPesquisa.js";
import { Titulo } from "../titulo/index.js";	

const PesquisaContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;
const Subtitulo = styled.h3`
    font-size: 16px;
    color: #FFF;
`;   

function Pesquisa(){
    const [ livrosPesquisados, setlivrosPesquisados ] = useState([]);
    
    return( 
        <PesquisaContainer>
          <Titulo cor="red" tamanhoDeFonte="36px">Já sabe por onde começar?</Titulo>
          <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
          <Input placeholder="O que deseja encontrar?"
            onBlur={(evento) => {
                const textoDigitado = evento.target.value;
                const resultadoPesquisa = livros.filter(livro => {
                    return livro.nome.includes(textoDigitado);
                  });
                  setlivrosPesquisados(resultadoPesquisa);
              } 
            }/>
            {livrosPesquisados.map((livro) => (
                <div>
                   <p>{livro.nome}</p>
                   <img src={livro.src}/>
                </div>
            ))}
        </PesquisaContainer>
    );
}

export default Pesquisa;