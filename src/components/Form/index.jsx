import { useState } from "react";
import { Button } from "../Button";
import { Dropdown } from "../Dropdown";
import { Input } from "../Input";
import "./styles.css";

export const Form = ({ register, teams }) => {

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        register({
            nome,
            cargo,
            imagem,
            time
        });

        setNome("");
        setCargo("");
        setImagem("");
        setTime("");

    }

    return (
        <section className="form-container">
            <form onSubmit={e => handleSubmit(e)}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                
                <Input 
                    label="Nome" 
                    placeholder="Digite seu"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    required
                />

                <Input 
                    label="Cargo" 
                    placeholder="Digite seu"
                    value={cargo}
                    onChange={e => setCargo(e.target.value)}
                    required
                />

                <Input 
                    label="Imagem" 
                    placeholder="Informe o endereço da"
                    value={imagem}
                    onChange={e => setImagem(e.target.value)}
                />

                <Dropdown 
                    label="Time" 
                    itens={teams}
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    required
                />

                <Button>Criar card</Button>
            </form>
        </section>
    );
}