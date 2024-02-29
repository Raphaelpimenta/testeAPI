import React from "react";

const Ativos = ({dados}) => {
    return (
        <>
            <ul>
                <li>Horário inicial: {dados.horario_initial}</li>
                <li>Horário Final: {dados.horario_finished}</li>
                <li>Finalidade: {dados.finalidade}</li>
            </ul>
        </>
    )
}

export default Ativos