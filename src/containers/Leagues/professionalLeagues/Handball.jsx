import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import Navbar from '../../../components/Navbar';
import handball from '../../../images/handball.png';
import BorderLinearProgress from '../../../components/BorderLinearProgress';
import NavigationIcon from '@material-ui/icons/Navigation';
import FavTeam from '../../../components/FavTeam';
import firebase from '../../../config/firebase';

const Handball = () => {

    const history = useHistory();

    const goToLeague1 = () => {
        history.push('/professionalleague/handballleague1');
    }

    const goToLeague2 = () => {
        history.push('/professionalleague/handballleague2');
    }

    const goToLeague3 = () => {
        history.push('/professionalleague/handballleague3');
    }

    const goToBack = () => {
        history.goBack();
    }

    useEffect(() => {
        document.title = "Sport Bet || Basketball";
        firebase.auth().onAuthStateChanged(user => {
            if (user) {

            }
            else {
                history.push('/authentication');
            }
        })
    }, [])

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
                    <h1 className="signup_title text-center mt-4">Handball</h1>
                    <div className="mt-3 mb-5">
                        <p>Please select the league you want to play</p>
                        <BorderLinearProgress variant="determinate" value={60} />
                    </div>
                    <div className="row mt-5">
                        <div className="col-12">
                            <button className="btn_custom shadow border mb-2 p-4" onClick={goToLeague1}>
                                <div className="row">
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-12 d-flex justify-content-center align-items-center">
                                                <img src={handball} alt="professional league" className="leagueImg" />
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-8 col-12 text-lg-left text-md-left text-sm-left text-center">
                                                <p className="mb-0">League A</p>
                                                <p className="mb-0 selectFavTeam" style={{ marginTop: "-30px" }}>Select your favorite team.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="col-12">
                            <button className="btn_custom shadow border mb-2 p-4" onClick={goToLeague2}>
                                <div className="row">
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-12 d-flex justify-content-center align-items-center">
                                                <img src={handball} alt="professional league" className="leagueImg" />
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-8 col-12 text-lg-left text-md-left text-sm-left text-center">
                                                <p className="mb-0">League B</p>
                                                <p className="mb-0 selectFavTeam" style={{ marginTop: "-30px" }}>Select your favorite team.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="col-12">
                            <button className="btn_custom shadow border mb-2 p-4" onClick={goToLeague3}>
                                <div className="row">
                                    <div className="col-10">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-4 col-12 d-flex justify-content-center align-items-center">
                                                <img src={handball} alt="professional league" className="leagueImg" />
                                            </div>
                                            <div className="col-lg-8 col-md-8 col-sm-8 col-12 text-lg-left text-md-left text-sm-left text-center">
                                                <p className="mb-0">League C</p>
                                                <p className="mb-0 selectFavTeam" style={{ marginTop: "-30px" }}>Select your favorite team.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Handball;