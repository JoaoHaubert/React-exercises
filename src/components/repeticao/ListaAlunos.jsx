import React from "react";
import alunos from "../../data/alunos"

export default props => {

    const alunosLista = alunos.map((aluno) => {
        return (
            <p><li key={aluno.id}>
                {aluno.id}) {aluno.nome} - {aluno.nota}
            </li></p>
        )
    })

    return(
        <div>
            <ul style = {{listStyle: 'none'}}>
                { alunosLista }
            </ul>
        </div>
    )
}