import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import BorderLinearProgress from '../components/BorderLinearProgress';
import NavigationIcon from '@material-ui/icons/Navigation';
import FavTeam2 from '../components/FavTeam2';
import '../App.css';
import { useHistory } from 'react-router';

const SelectOption = () => {

    const history = useHistory();

    useEffect(() => {
        document.title = "Sport Bet || Select";
    }, []);

    const goToBack = () => {
        console.log(history.goBack());
    }

    const predictScore = () => {
        history.push('/predictscore');
    }

    const predictOutcome = () => {
        history.push('/predictoutcome');
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
                        <FavTeam2 />
                        <h1 className="signup_title text-center mt-4">Predictions</h1>
                        <BorderLinearProgress variant="determinate" value={60} />
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-6 col-12">
                            <button className="btn_custom shadow border mb-2 p-4" onClick={predictScore}>
                                <div className="d-flex justify-content-between">
                                    <div>Predict Score</div>
                                    <div>
                                        <NavigationIcon className="predict_icon" fontSize="large" />
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="col-sm-6 col-12" >
                            <button className="btn_custom shadow border mb-2 p-4" onClick={predictOutcome}>
                                <div className="d-flex justify-content-between">
                                    <div>Predict Outcome</div>
                                    <div>
                                        <NavigationIcon className="predict_icon" fontSize="large" />
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

export default SelectOption;