import React from "react";


const ListagemAtivos = () => {

    function listagem(){

        // const teste = [
        //     {
        //         "id": "2d0e3d0e-50a4-4b98-96b1-b049c5f2b122",
        //         "nome_ativo": "Robô Cartesiano - Simulador",
        //         "icon_ativo": "machine.svg",
        //         "description": "Robô XY Simulador",
        //         "unidade_senai_localizada": "Vila Mariana",
        //         "createdAt": "2024-02-28T18:44:12.851Z"
        //     },
        //     {
        //         "id": "99438a49-783a-40c2-ac07-b58c22248b2b",
        //         "nome_ativo": "Dinamômetro Automotivo",
        //         "icon_ativo": "dinamometro.svg",
        //         "description": "Dinamômetro Automotivo Veicular",
        //         "unidade_senai_localizada": "Ipiranga",
        //         "createdAt": "2024-02-28T18:44:12.845Z"
        //     },
        //     {
        //         "id": "9ae57af8-0ab6-4236-8cd1-9483dfc99360",
        //         "nome_ativo": "Planta Smart 4.0",
        //         "icon_ativo": "plant_manufature.svg",
        //         "description": "Planta de Manufatura Didática",
        //         "unidade_senai_localizada": "Vila Mariana",
        //         "createdAt": "2024-02-28T18:44:12.834Z"
        //     }
        // ];

        // const lista = teste.map((item) => {
        //     let listaItem = 
        //     {
        //         "id": item.id,
        //         "nome":  item.nome_ativo,
        //     }
        //     return listaItem
            
        // });

        // console.log(lista)

        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDkzMTk0NjcsImV4cCI6MTcwOTMyMjQ2Nywic3ViIjoiZTFkNjU4MzgtYTJlNi00ZWQ4LThhYjYtMGRiMWRkMmQ1ODkzIn0.GHigeQRoCDXBsyIlItClb1wbAj63SXqC6AgR1zE1TtY'

        fetch('http://localhost:3400/ativos/all_ativos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then((response) => {
            response.json();
        }).then((data) => {
            data = teste
            // teste.nome_ativo
            console.log(data.id)
        });

    }

    return (
        <>
            <button style={{margin: ".5rem"}} onClick={listagem}>Listar Ativos</button>
        </>
    )
    


}

export default ListagemAtivos