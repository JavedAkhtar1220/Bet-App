import React from 'react';
import { useHistory } from 'react-router';
import Navbar from '../../../components/Navbar';
// import football from '../../../images/football.png';
import BorderLinearProgress from '../../../components/BorderLinearProgress';
import NavigationIcon from '@material-ui/icons/Navigation';
import FavTeam from '../../../components/FavTeam';
// import data from '../data';

const data = [
    {
        name: "Arsenal",
        logo: "https://media.api-sports.io/football/teams/42.png"
    },
    {
        name: "Burnley",
        logo: "https://media.api-sports.io/football/teams/44.png"
    },
    {
        name: "Everton",
        logo: "https://media.api-sports.io/football/teams/45.png"
    },
    {
        name: "Leicester",
        logo: "https://media.api-sports.io/football/teams/46.png"
    },
    {
        name: "Tottenham",
        logo: "https://media.api-sports.io/football/teams/47.png"
    },
    {
        name: "West Ham",
        logo: "https://media.api-sports.io/football/teams/48.png"
    },
    {
        name: "Chelsea",
        logo: "https://media.api-sports.io/football/teams/49.png"
    }
]

const FLeague2 = () => {
    const history = useHistory();

    const favTeam = team => {
        var promise = new Promise((resolve) => {
            resolve(localStorage.setItem('fav_team', team));
        })
        promise.then(() => {
            history.push('/selectoption');
        })
    }

    const goToBack = () => {
        history.push('/football');
    }

    return (
        <div>
            <Navbar />
            <div className="cover_img">
                <div className="container">
                    <h2 className="text-white">Let's! <br /> Play & Joy...</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-8 m-auto">

                    <div className="mt-3 mb-5">
                        <div className="mt-4">
                            <button className="btn_back" onClick={goToBack}>
                                <NavigationIcon className="back_icon" />
                                <span className="ml-1">Back</span>
                            </button>
                        </div>
                        <FavTeam />
                        <h1 className="signup_title mt-4">Football-Teams (League B)</h1>
                        <BorderLinearProgress variant="determinate" value={60} />
                    </div>
                    <div className="row mt-5">
                        {data.map((v, i) => {
                            return <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3" key={i}>
                                <button className="btn_team shadow border p-4" onClick={() => favTeam(v.name)}>
                                    <img src={v.logo} alt={v.name} width="100%" height="100%" />
                                </button>
                            </div>
                        })}
                        {/* <div className="col-lg-3 col-md-3 col-sm-4 col-10 mb-3">
                            <button className="btn_team shadow border p-4">
                                Team 1
                            </button>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 col-10 mb-3">
                            <button className="btn_team shadow border p-4">
                                Team 2
                            </button>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 col-10 mb-3">
                            <button className="btn_team shadow border p-4">
                                Team 3
                            </button>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-4 col-10 mb-3">
                            <button className="btn_team shadow border p-4">
                                Team 3
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FLeague2;