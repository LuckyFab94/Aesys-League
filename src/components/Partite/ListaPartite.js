import React, { useState } from 'react'
import Partita from './Partita';

const Partite = () => {
    const [partite, setPartite] = useState([
        {
            id: 1,
            competizione: 'Serie A',
            home: 'Squadra A',
            away: 'Squadra B',
            score: {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 4,
                    "awayTeam": 0
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                }
            }
        },
        {
            id: 2,
            competizione: 'Bundesliga',
            home: 'Squadra C',
            away: 'Squadra D',
            score: {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 2,
                    "awayTeam": 2
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                }
            }
        },
        {
            id: 3,
            competizione: 'Premier League',
            home: 'Squadra E',
            away: 'Squadra F',
            score: {
                "winner": "HOME_TEAM",
                "duration": "REGULAR",
                "fullTime": {
                    "homeTeam": 3,
                    "awayTeam": 1
                },
                "halfTime": {
                    "homeTeam": 2,
                    "awayTeam": 0
                }
            }
        }
    ]);
    return (
        <div className="container-fluid">
            {partite.map((par) => (
                <div key={par.id} className="row mt-1">
                    <div className="col">
                        <Partita partita={par} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Partite
