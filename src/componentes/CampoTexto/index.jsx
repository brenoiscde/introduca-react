import "./CampoTexto.css";

function CampoTexto(props){
    let p = props;
    return(
        <div className="campo-texto" >
            <label>{p.label}</label>
            <input required={p.obrigatorio} placeholder={p.placeholder}/>
        </div>
    );
}
export default CampoTexto;

