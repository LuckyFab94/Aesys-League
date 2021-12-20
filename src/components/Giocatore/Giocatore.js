import React from 'react'

const Giocatore = (props) => {
    let giocatore = props.giocatore
    return (
        <li>{giocatore.nome} {giocatore.cognome}</li>
    )
}

export default Giocatore
