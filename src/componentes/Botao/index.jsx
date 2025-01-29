import "./Botao.css";

function Botao(props){
    let prop = props;
    return(
        <button className="button" >{prop.children}</button>
    );
}
export default Botao;