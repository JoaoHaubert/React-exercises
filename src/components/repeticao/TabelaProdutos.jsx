import react from "react";
import produtos from "../../data/produtos"
import "./TabelaProdutos.css"


export default props => {

    const tabela = produtos.map((prod)=>{
        return(
            <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.produto}</td>
                <td>R$ {prod.preco}</td>
            </tr>
    )})

    return(
        <div>
           <table className="TabelaProdutos">
        <thead>
            <tr>
                <th>Id</th>
                <th>Produto</th>
                <th>Preço</th>
            </tr>  
        </thead>
        <tbody>
            { tabela }
        </tbody>
    </table>
        </div>
    )
}