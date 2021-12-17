import React from 'react'

const Team = (props) => {
    let team = props.team;
    let image= require.context('../../', true);
    return (
        <div className="card">
                <button onClick={() => props.onClickTeam(`/team/${team.id}`)} className="card-body btn d-flex flex-column align-items-center d-flex label-team">
                    <img src={image(`${team.logo}`).default} className='rounded-circle Team-logo'/>
                    <span>{team.nome}</span>
                </button>
        </div>
    ) 
}

export default Team
