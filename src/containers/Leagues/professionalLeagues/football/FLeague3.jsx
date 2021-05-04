import React from 'react';
import { useHistory } from 'react-router';
import Navbar from '../../../../components/Navbar';
import FavTeam from '../../../../components/FavTeam';
import BorderLinearProgress from '../../../../components/BorderLinearProgress';
import NavigationIcon from '@material-ui/icons/Navigation';

const data = [
    {
        name: "Manchester City",
        logo: "https://media.api-sports.io/football/teams/50.png",
    },
    {
        name: "Brighton",
        logo: "https://media.api-sports.io/football/teams/51.png",
    },
    {
        name: "Crystal Palace",
        logo: "https://media.api-sports.io/football/teams/52.png",
    },
    {
        name: "Sheffield Utd",
        logo: "https://media.api-sports.io/football/teams/62.png",
    },
    {
        name: "Aston Villa",
        logo: "https://media.api-sports.io/football/teams/66.png",
    },
    {
        name: "Norwich",
        logo: "https://media.api-sports.io/football/teams/71.png",
    },
]

const FLeague3 = () => {
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
        history.goBack();
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
                        <h1 className="signup_title mt-4">Football-Teams (League C)</h1>
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

export default FLeague3;