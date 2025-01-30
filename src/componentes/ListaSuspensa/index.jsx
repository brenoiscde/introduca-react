import "./ListaSuspensa.css";

function ListaSuspensa(props){
    let p = props;
    console.log(p.itens);
    return(
        <div className="lista-suspensa" >
            <label>{p.label}</label>
            <select required={p.obrigatorio}> 
                {p.itens.map(item => <option key={item} >{item}</option>)}
            </select>
        </div>
    );
}
export default ListaSuspensa;