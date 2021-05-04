import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Navbar from '../components/Navbar';
import football from '../images/football.png';
import basketball from '../images/basketball.png';
import handball from '../images/handball.png';
import cyclisme from '../images/cyclisme.png'
import boeuf from '../images/boeuf.png';
import BorderLinearProgress from '../components/BorderLinearProgress';
import NavigationIcon from '@material-ui/icons/Navigation';
import firebase from '../config/firebase';
import FavTeam from '../components/FavTeam';


const NPLeagueList = () => {

    const history = useHistory();

    const footballFun = () => {
        history.push('/nonprofessionalleague/football');
    }

    const basketballFun = () => {
        history.push('/nonprofessionalleague/basketball');
    }

    const handballFun = () => {
        history.push('/nonprofessionalleague/handball');
    }

    const cyclismeFun = () => {
        history.push('/nonprofessionalleague/cyclisme');
    }

    const tirantsFun = () => {
        history.push('/nonprofessionalleague/boeuftirants');
    }

    const goToBack = () => {
        history.push('/home');
    }

    useEffect(() => {
        document.title = "Sport Bet || Non Professional League";
        firebase.auth().onAuthStateChanged(user => {
            if (user) {

            }
            else {
                history.push('/authentication');
            }
        })
    }, []);


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
                    <div className="mt-4">
                        <button className="btn_back" onClick={goToBack}>
                            <NavigationIcon className="back_icon" />
                            <span className="ml-1">Back</span>
                        </button>
                    </div>
                    <FavTeam />
                    <h1 className="signup_title text-center mt-4">Non Professional League</h1>
                    <div className="mt-3 mb-5">
                        <p>Games</p>
                        <BorderLinearProgress variant="determinate" value={60} />
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                            <button className="btn_custom shadow border mb-2 p-4" onClick={footballFun}>
                                <div>
                                    <img src={football} alt="Football" className="leagueImg" />
                                </div>
                                Football
                                <BorderLinearProgress variant="determinate" value={60} />
                            </button>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                            <button className="btn_custom shadow border mb-2 p-4" onClick={basketballFun}>
                                <div>
                                    <img src={basketball} alt="Basketball" className="leagueImg" />
                                </div>
                                Basketball
                                <BorderLinearProgress variant="determinate" value={60} />
                            </button>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                            <button className="btn_custom shadow border mb-2 p-4" onClick={handballFun}>
                                <div>
                                    <img src={handball} alt="Handball" className="leagueImg" />
                                </div>
                                Handball
                                <BorderLinearProgress variant="determinate" value={60} />
                            </button>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                            <button className="btn_custom shadow border mb-2 p-4" onClick={cyclismeFun}>
                                <div>
                                    <img src={cyclisme} alt="Cyclisme" className="leagueImg" />
                                </div>
                                Cyclisme
                                <BorderLinearProgress variant="determinate" value={60} />
                            </button>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                            <button className="btn_custom shadow border mb-2 p-4" onClick={tirantsFun}>
                                <div>
                                    <img src={boeuf} alt="Boeuf Tirants" className="leagueImg" />
                                </div>
                                Boeuf Tirants
                                <BorderLinearProgress variant="determinate" value={60} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NPLeagueList;