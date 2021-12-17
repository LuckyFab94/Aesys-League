import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import store from '../../config/store'
import { PARTITE } from '../../config/actionReducer'

import { getSquadra } from '../../config/action';
const selectSquadra = state => state.squadra

const ShowTeam = (props) => {
    const { id } = useParams();
    //const [squadra, setSquadra] = useState(undefined)
    const [loading, setLoading] = useState(false)
    const squadra = useSelector(selectSquadra)

    useEffect(() => {
        //console.log(props)
        // if(props.squadra !== undefined){
        //     setSquadra(props.squadra)
        //     //console.log('setto')
        //     setLoading(false)
        // }
        // //console.log(loading)
        // if(loading)
        getSquadra(id)
    }, [])


    let image = require.context('../../', true);


    return (
        <React.Fragment>
            <div className="container-fluid mt-2" style={{ height: '100%' }}>
                {loading ? (
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <img src={image('./ball.png').default} className='App-logo' />
                    </div>
                ) : (
                    <React.Fragment>
                        {squadra !== undefined ? (
                            <React.Fragment>
                                <div className='border d-flex flex-column align-items-center'>
                                    <h1>{squadra.nome}</h1>
                                    Presidente: {squadra.presidente}
                                </div>
                                <div className='row mt-1'>
                                    <div className='col-auto'>
                                        {squadra.logo !== undefined ? (
                                            <img src={image(`${squadra.logo}`).default} className='rounded-circle' style={{ height: '30vmin' }}></img>
                                        ) : (
                                            "Logo"
                                        )
                                        }
                                    </div>
                                    <div className='col'>
                                        {
                                            squadra.giocatori !== undefined ? (
                                                <ul>
                                                    Giocatori:
                                                    {
                                                        squadra.giocatori.map((giocatore, index) => (
                                                            <li key={index}>{giocatore.nome} {giocatore.cognome}</li>
                                                        ))
                                                    }
                                                </ul>
                                            ) : (
                                                "Lista vuota"
                                            )
                                        }

                                    </div>
                                </div>
                            </React.Fragment>
                        ) : (
                            "eabajhdhdjahj"
                        )}
                    </React.Fragment>
                )}


            </div>
        </React.Fragment>
    )
}

export default ShowTeam
