import React, { useEffect } from 'react'
import { getClassifica } from '../../config/action'
import { useSelector } from 'react-redux'

const Home = (props) => {

    const classifica = useSelector(state => state.classifica)
    const marcatori = useSelector(state => state.marcatori) 
    const isLoading = useSelector(state => state.isLoading)
    let image = require.context('../../', true);

    useEffect(() => {
        getClassifica()
    }, [])

    const classificaSort = classifica.sort((a, b) => (a.pt < b.pt) ? 1 : -1)
    const classificaMarcatori = marcatori.sort((a, b) => (a.goal < b.goal) ? 1 : -1)

    return (
        <div className='container-fluid' style={{ height: '90%' }}>
            {isLoading ? (
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <img src={image('./ball.png').default} className='App-logo' />
                </div>
            ) : (
                <React.Fragment>
                    <div className='container-fluid mt-1'>
                        <img className='element' src={image('./ball.png').default} />
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <table className="table table-borderless">
                                <thead>
                                    <tr className='table-dark'>
                                        <td colSpan={13} className='text-center'>Classifica</td>
                                    </tr>
                                    <tr className='table-dark'>
                                        <th scope="col" style={{ width: '5%' }}>#</th>
                                        <th scope="col" colSpan={2} className='w-50'></th>
                                        <th scope="col">PT</th>
                                        <th scope="col">G</th>
                                        <th scope="col">V</th>
                                        <th scope="col">N</th>
                                        <th scope="col">P</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {classificaSort.map((riga, index) => (
                                        <tr key={index} className='table-secondary'>
                                            <th scope="row">{index + 1}</th>
                                            <td colSpan={2}>{riga.squadra}</td>
                                            <td>{riga.pt}</td>
                                            <td>{riga.g}</td>
                                            <td>{riga.v}</td>
                                            <td>{riga.n}</td>
                                            <td>{riga.p}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <table className="table table-borderless">
                                <thead>
                                    <tr className='table-dark'>
                                        <td colSpan={13} className='text-center'>Marcatori</td>
                                    </tr>
                                    <tr className='table-dark'>
                                        <th scope="col" style={{ width: '5%' }}>#</th>
                                        <th scope="col" colSpan={2} className='w-50 text-center'>Nome</th>
                                        <th scope="col" className='text-center'>Goal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {classificaMarcatori.map((giocatore, index) => (
                                        <tr key={index} className='table-secondary'>
                                            <th scope="row">{index + 1}</th>
                                            <td colSpan={2} className='text-center'>{giocatore.nome}</td>
                                            <td className='text-center'>{giocatore.goal}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='col'>
                            <table className="table table-borderless">
                                <thead>
                                    <tr className='table-dark'>
                                        <td colSpan={13} className='text-center'>Miglior Portiere</td>
                                    </tr>
                                    <tr className='table-dark'>
                                        <th scope="col" style={{ width: '5%' }}>#</th>
                                        <th scope="col" colSpan={2} className='w-75' className='text-center'>Nome</th>
                                        <th scope="col" className='text-center'>Punti</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {classificaMarcatori.map((giocatore, index) => (
                                        <tr key={index} className='table-secondary'>
                                            <th scope="row">{index + 1}</th>
                                            <td colSpan={2} className='text-center'>{giocatore.nome}</td>
                                            <td className='text-center'>{giocatore.goal}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}

export default Home
