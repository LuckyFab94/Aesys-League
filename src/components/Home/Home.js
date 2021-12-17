import React from 'react'

const Home = (props) => {
    return (
        <div className='container-fluid mt-1'>
            <div className='row'>
                <div className='col'>
                    <table class="table table-borderless">
                        <thead>
                            <tr className='table-dark'>
                                <td colspan="13" className='text-center'>Classifica</td>
                            </tr>
                            <tr className='table-dark'>
                                <th scope="col">#</th>
                                <th scope="col" colspan="2" className='w-25'></th>
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
                            <tr className='table-secondary'>
                                <th scope="row">1</th>
                                <td colspan="2">Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto</td>
                            </tr>
                            <tr className='table-secondary'>
                                <th scope="row">2</th>
                                <td colspan="2">Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto</td>
                            </tr>
                            <tr className='table-secondary'>
                                <th scope="row">3</th>
                                <td colspan="2">Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>Otto</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Home
