import React, { useEffect, useState } from 'react';

const data = [
    {
        name: "Manchester United",
        logo: "https://media.api-sports.io/football/teams/33.png",
        date: "12/10/20",
        status: false,
    },
    {
        name: "Newcastle",
        logo: "https://media.api-sports.io/football/teams/34.png",
        date: "12/10/20",
        status: false,
    },
    {
        name: "Bournemouth",
        logo: "https://media.api-sports.io/football/teams/35.png",
        date: "12/10/20",
        status: false,
    },
    {
        name: "Watford",
        logo: "https://media.api-sports.io/football/teams/38.png",
        date: "12/10/20",
        status: false,
    },
    {
        name: "Wolves",
        logo: "https://media.api-sports.io/football/teams/39.png",
        date: "12/10/20",
        status: false,
    },
    {
        name: "Liverpool",
        logo: "https://media.api-sports.io/football/teams/40.png",
        date: "12/10/20",
        status: false,
    },
    {
        name: "Southampton",
        logo: "https://media.api-sports.io/football/teams/41.png",
        date: "12/10/20",
        status: false,
    }
]


const FootballLeague = () => {

    const [betLeague, setBetLeague] = useState([]);

    useEffect(() => {
        // setBetLeague([])
        fetch("https://api-football-beta.p.rapidapi.com/leagues?id=61", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "76c5f653d1mshbe6a1ebc14bcb2bp1f78bdjsn5fb9e4c4660d",
                "x-rapidapi-host": "api-football-beta.p.rapidapi.com"
            }
        })
            .then(response => response.json()
                .then(data => {
                    // setBetLeague(data.)
                }))
            .catch(err => {
                console.error(err);
            });
    })

    return (
        <div className="row mt-5 mb-5">
            <div className="col-12 m-auto">
                {data.map((v, i) => {
                    return <div key={i} className="mb-3">
                        <p className="mb-0">Date: {v.date}</p>
                        <div className="border rounded p-4" style={{ background: "#f0f0f0" }}>
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-10 col-12 m-auto">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-8 col-sm-10 col-12 m-auto">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <img src={v.logo} alt={v.name} className="pl_img img-fluid" />
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <p className="fw-bold">vs</p>
                                                </div>
                                                <div>
                                                    <img src={v.logo} alt={v.name} className="pl_img img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-4">
                                                    <button className={v.status ? "btn_bet rounded shadow small text-break bg-primary" : "btn_bet rounded shadow small text-break"}>{v.name}</button>
                                                </div>
                                                <div className="col-4">
                                                    <button className={v.status ? "btn_bet rounded shadow small text-break bg-primary" : "btn_bet rounded shadow small text-break"}>Draw</button>
                                                </div>
                                                <div className="col-4">
                                                    <button className={v.status ? "btn_bet rounded shadow small text-break " : "btn_bet rounded shadow small text-break"}>{v.name}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export default FootballLeague;