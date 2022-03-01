import "./App.css";
import React from "react";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsarioInfo"
import ParOuImpar from "./components/condicional/ParOuImpar";
import Tabela from "./components/repeticao/TabelaProdutos"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import Familia from "./components/basicos/Familia"
import Card from "./components/layout/Card"
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";



export default () => {
    return(
        <div className = "app">
            <h1>Fundamentos React</h1>
            <div className = "cards">

                <Card titulo = "#11 - Componente com estado(useState)"
                      color = "#D06EC5"
                >
                    <IndiretaPai/>

                </Card>
                <Card titulo = "#10 - Comunicacao Indireta"
                      color = "#30A274"
                >
                    <IndiretaPai/>

                </Card>

                <Card titulo = "#09 - Comunicacao Direta"
                      color = "#C87A7A"
                >
                    <DiretaPai/>

                </Card>

                <Card titulo = "#08 - Par ou Impar renderizacao condicional"
                      color = "#5F9EA0"
                >
                    <ParOuImpar
                    numero = {18}
                    />
                    
                    <UsuarioInfo
                    usuario = {{ nome: "Joao"}}
                    />

                    <UsuarioInfo
                    usuario = {{ }}
                    />

                    <UsuarioInfo
                    usuario = {{ batata: "Joao"}}
                    />

                </Card>

                <Card 
                    titulo = "#07 - Exercicio Table" 
                    color = "##00FFFF" 
                > 
                    <Tabela/>
                                
                </Card>
                <Card 
                    titulo = "#06 - Repeticoes" 
                    color = "#191970" 
                > 
                    <ListaAlunos/>
                                
                </Card>

                <Card 
                    titulo = "#05 - Componentes com Children" 
                    color = "#9D3FD3" 
                > 
                    <Familia sobrenome = "Haubert"/>
                                
                </Card>

                <Card 
                    titulo = "#04 - Desafio Math Random" 
                    color = "#5D3FD3" 
                > 
                    <Aleatorio 
                        min = {30} 
                        max = {60}
                    />

                </Card>


                <Card 
                    titulo = "#03 - Sorteador" 
                    color = "#0818A8" 
                > 
                    <Fragmento
                       minimo = {1}
                       maximo = {45}
                    />
                </Card>

                

                
                <Card 
                    titulo = "#02 - Com Parametro"
                    color = "#6082B6" 
                >
                    <ComParametro 
                        titulo = "Batata" 
                        subtitulo = "Ola ola ola ola"
                        numeros = {365459}
                    />
                </Card>

                <Card 
                    titulo = "#01 - Primeiro Componente"
                    color = "#8B4513"
                >
                    <Primeiro/>
                </Card>

            </div>
        </div>
    )
}