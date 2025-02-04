import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Form.css";

function Form(){
    const times = [
        "Programação",
        "Front-end",
        "Data Science",
        "Devops",
        "UX e Design",
        "Mobile",
        "Inovação e Gestão"
    ];

    const aoSalvar = (evento)=>{
        evento.preventDefault();
        console.log("o form foi submetido");
    };
    return(
        <section className="form" >
            <form onSubmit={aoSalvar}> 
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder= "Digite seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo"placeholder= "Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}

export default Form;