import React from "react";

const CriarUser = () => {


    function enviar(){
        console.log("Testeeeeee")

        const dadosUsuario = {
            "nome": document.getElementById('nome').value,
            "email": document.getElementById('email').value,
            "password": document.getElementById('senha').value,
            "nif": document.getElementById('nif').value,
            "cargo": document.getElementById('cargo').value,
        };

        fetch('http://localhost:3400/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosUsuario),
        }).then((response) => {
            response.json();
        }).then((data) => {
            return data;
        }).catch((error) =>{
            console.error('Erro:', error)
        });


        console.log('Enviado!')
    }

    return (
        <>
            <form action="/" className="formulario">
                <div className="input-test">
                    <label htmlFor="nome" >Nome completo:</label>
                    <input type="text" id="nome" placeholder="Digite seu nome" />
                </div>
                <div className="input-test">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" placeholder="Digite seu e-mail" />
                </div>
                <div className="input-test">
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" placeholder="Digite sua senha" />
                </div>
                <div className="input-test">
                    <label htmlFor="nif">NIF:</label>
                    <input type="nif" id="nif" placeholder="Digite seu nif" />
                </div>
                <div className="input-test">
                    <label htmlFor="cargo">Cargo:</label>
                    <input type="cargo" id="cargo" placeholder="Digite seu cargo" />
                </div>
                <button style={{margin: "0.5rem"}} type="submit" onClick={enviar}>Enviar</button>
            </form>
        </>
    )
}

export default CriarUser