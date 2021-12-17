import React, { useEffect } from 'react'
import { getClassifica } from '../../config/action'
import { useSelector } from 'react-redux'

const Home = (props) => {

    const classifica = useSelector(state => state.classifica)
    const isLoading = useSelector(state => state.isLoading)
    let image = require.context('../../', true);

    useEffect(() => {
        getClassifica()
    }, [])

    const classificaSort = classifica.sort((a, b) => (a.pt < b.pt) ? 1 : -1)

    return (
        <div className='container-fluid mt-1' style={{ height: '100%' }}>
            {isLoading ? (
                <div className='d-flex justify-content-center align-items-center h-100'>
                    <img src={image('./ball.png').default} className='App-logo' />
                </div>
            ) : (
                <div className='row'>
                    <div className='col'>
                        <table className="table table-borderless">
                            <thead>
                                <tr className='table-dark'>
                                    <td colSpan={13} className='text-center'>Classifica</td>
                                </tr>
                                <tr className='table-dark'>
                                    <th scope="col">#</th>
                                    <th scope="col" colSpan={2} className='w-25'></th>
                                    <th scope="col">PT</th>
                                    <th scope="col">G</th>
                                    <th scope="col">V</th>
                                    <th scope="col">N</th>
                                    <th scope="col">P</th>
                                    <th scope="col">PN</th>
                                    <th scope="col">D</th>
                                    <th scope="col">Ft</th>
                                    <th scope="col">Sb</th>
                                    <th scope="col">Df</th>
                                </tr>
                            </thead>
                            <tbody>
                                {classificaSort.map((riga, index) => (
                                    <tr key={index} className='table-secondary'>
                                        <th scope="row">{index+1}</th>
                                        <td colSpan={2}>{riga.squadra}</td>
                                        <td>{riga.pt}</td>
                                        <td>{riga.g}</td>
                                        <td>{riga.v}</td>
                                        <td>{riga.n}</td>
                                        <td>{riga.p}</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>Otto</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Home
