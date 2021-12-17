import React from 'react'
import logo from '../../logo.svg'

const Card = (props) => {
    let partita=props.partita;
    return (
        <div className="card">
                <div className="d-flex p-2 bd-highlight align-items-center justify-content-center">
                    <img src={logo} className='App-logo'></img>
                    {partita.home} {partita.score.fullTime.homeTeam} - {partita.score.fullTime.awayTeam} {partita.away}
                    <img src={logo} className='App-logo'></img>
                </div>
        </div>
    )
}

export default Card
