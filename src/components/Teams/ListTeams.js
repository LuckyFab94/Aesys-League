import React, { useState, useEffect } from 'react'
import Team from './Team';
import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { getSquadre } from '../../config/action'




const ListTeams = (props, state) => {
    const navigate = useNavigate();

    const goToTeam = (path = String) => {
        navigate(path)
    }

    let image = require.context('../../', true);

    const listaSquadre = useSelector(state => state.squadre)
    const isLoading = useSelector(state => state.isLoading)

    useEffect(() => {
        getSquadre()
    }, [])
    return (
        <div className="container-fluid mt-2" style={{ height: '90%' }}>
            {
                isLoading ? (
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <img src={image('./ball.png').default} className='App-logo' />
                    </div>
                ) : (
                    listaSquadre.length > 0 ? (
                        <div className="row row-cols-2 mt-1">
                            {
                                listaSquadre.map((team, index) => (
                                    <div key={index} className="col mt-1">
                                        <Team onClickTeam={goToTeam} team={team} />
                                    </div>
                                ))
                            }
                        </div>) : (
                        `Nessuna squadra`)
                )
            }
        </div>
    )
}

export default ListTeams
