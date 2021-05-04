import React from 'react';
import { useHistory } from 'react-router';
import Navbar from '../../../../components/Navbar';
import FavTeam from '../../../../components/FavTeam';
import BorderLinearProgress from '../../../../components/BorderLinearProgress';
import NavigationIcon from '@material-ui/icons/Navigation';

const HLeague1 = () => {

    const history = useHistory();

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
                        <h1 className="signup_title mt-4">Handball-Teams (League A)</h1>
                        <BorderLinearProgress variant="determinate" value={60} />
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-3 col-sm-4 col-10 mb-3">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HLeague1;