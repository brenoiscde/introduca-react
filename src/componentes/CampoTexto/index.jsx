import "./CampoTexto.css";

function CampoTexto(props){
    let p = props;
    let valor = "";
    const aoDigitar = (event) =>{
        valor = event.target.value;
        console.log(valor);
    };
    return(
        <div className="campo-texto" >
            <label>{p.label}</label>
            <input value={valor} onChange={aoDigitar} required={p.obrigatorio} placeholder={p.placeholder}/>
        </div>
    );
}
export default CampoTexto;

