import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import football from '../images/football.png';
import basketball from '../images/basketball.png';
import handball from '../images/handball.png';
import NavigationIcon from '@material-ui/icons/Navigation';
import BorderLinearProgress from '../components/BorderLinearProgress';
import FavTeam from '../components/FavTeam';
import firebase from '../config/firebase';


const PL = () => {
    const history = useHistory();

    const goToFootball = () => {
        history.push('/football');
    }

    const goToBasketball = () => {
        history.push('/basketball');
    }

    const goToHandball = () => {
        history.push('/handball');
    }

    const goToBack = () => {
        history.push('/home');
    }

    useEffect(() => {
        document.title = "Sport Bet || Professional League";
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
                    <h1 className="signup_title text-center mt-4">Professional League</h1>
                    <div className="mt-3 mb-5">
                        <p>Games</p>
                        <BorderLinearProgress variant="determinate" value={60} />
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                            <button className="btn_custom shadow border mb-2 p-4" onClick={goToFootball}>
                                <div>
                                    <img src={football} alt="professional league" className="leagueImg" />
                                </div>
                                Football
                                <BorderLinearProgress variant="determinate" value={60} />
                            </button>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                            <button className="btn_custom shadow border mb-2 p-4" onClick={goToBasketball}>
                                <div>
                                    <img src={basketball} alt="professional league" className="leagueImg" />
                                </div>
                                Basketball
                                <BorderLinearProgress variant="determinate" value={60} />
                            </button>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                            <button className="btn_custom shadow border mb-2 p-4" onClick={goToHandball}>
                                <div>
                                    <img src={handball} alt="professional league" className="leagueImg" />
                                </div>
                                Handball
                                <BorderLinearProgress variant="determinate" value={60} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PL;