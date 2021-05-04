import React, { useEffect, useState } from 'react';

// const data = [
//     {
//         name: "Manchester United",
//         logo: "https://media.api-sports.io/football/teams/33.png",
//         date: "12/10/20",
//         status: false,
//     },
//     {
//         name: "Newcastle",
//         logo: "https://media.api-sports.io/football/teams/34.png",
//         date: "12/10/20",
//         status: false,
//     },
//     {
//         name: "Bournemouth",
//         logo: "https://media.api-sports.io/football/teams/35.png",
//         date: "12/10/20",
//         status: false,
//     },
//     {
//         name: "Watford",
//         logo: "https://media.api-sports.io/football/teams/38.png",
//         date: "12/10/20",
//         status: false,
//     },
//     {
//         name: "Wolves",
//         logo: "https://media.api-sports.io/football/teams/39.png",
//         date: "12/10/20",
//         status: false,
//     },
//     {
//         name: "Liverpool",
//         logo: "https://media.api-sports.io/football/teams/40.png",
//         date: "12/10/20",
//         status: false,
//     },
//     {
//         name: "Southampton",
//         logo: "https://media.api-sports.io/football/teams/41.png",
//         date: "12/10/20",
//         status: false,
//     }
// ]


const FootballLeague = () => {

    const [betLeague, setBetLeague] = useState([]);


    useEffect(() => {

        fetch("https://api-football-beta.p.rapidapi.com/fixtures?date=2020-02-06", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "76c5f653d1mshbe6a1ebc14bcb2bp1f78bdjsn5fb9e4c4660d",
                "x-rapidapi-host": "api-football-beta.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then(data => {
                setBetLeague(data.response);
            })
            .catch(err => {
                console.error(err);
            });

        // fetch("https://v3.football.api-sports.io/fixtures/headtohead?h2h=33-34", {
        //     "method": "GET",
        //     "headers": {
        //         "x-rapidapi-host": "v3.football.api-sports.io",
        //         "x-rapidapi-key": "59c800cbb77098b985e95bfa06223399"
        //     }
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         setBetLeague(data.response);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    }, [])

    return (
        <div className="row mt-5 mb-5">
            <div className="col-12 m-auto">
                <div className="mb-3">
                    {betLeague.map((v, i) => {
                        return <div key={i} className="mb-3">
                            <p className="mb-0">Date: {v.fixture.date}</p>
                            <div className="border rounded p-4" style={{ background: "#f0f0f0" }}>
                                <div className="row">
                                    <div className="col-lg-8 col-md-8 col-sm-10 col-12 m-auto">
                                        <div className="row">
                                            <div className="col-4 d-flex justify-content-center align-items-center flex-column">
                                                <img src={v.teams.home.logo} alt={v.teams.home.name} className="pl_img img-fluid" />
                                                <p className="text-center">{v.teams.home.name}</p>
                                            </div>
                                            <div className="col-4 d-flex justify-content-center align-items-center">
                                                <p className="fw-bold">
                                                    <span>{v.goals.home}</span>
                                                    <span>:</span>
                                                    <span>{v.goals.away}</span>
                                                </p>
                                            </div>
                                            <div className="col-4 d-flex justify-content-center align-items-center flex-column">
                                                <img src={v.teams.away.logo} alt={v.teams.away.name} className="pl_img img-fluid" />
                                                <p className="text-center">{v.teams.away.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default FootballLeague;