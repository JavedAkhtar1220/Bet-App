import React from 'react';
import { useHistory } from 'react-router';
import Navbar from '../../components/Navbar';
import BorderLinearProgress from '../../components/BorderLinearProgress';
import NavigationIcon from '@material-ui/icons/Navigation';
import FavTeam2 from '../../components/FavTeam2';
import FootballLeague from '../availableLeagues/FootballLeague';

const PredictOutcome = () => {

    const history = useHistory();
    // const [matches, setMatches] = useState([]);

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
                <div className="col-lg-8 col-md-8 col-sm-10 col-10 m-auto">
                    <div className="mt-3 mb-5">
                        <div className="mt-4">
                            <button className="btn_back" onClick={goToBack}>
                                <NavigationIcon className="back_icon" />
                                <span className="ml-1">Back</span>
                            </button>
                        </div>
                        <FavTeam2 />
                        <div className="d-flex justify-content-between">
                            <div>
                                <h1 className="signup_title mt-5">Predict Outcome</h1>
                            </div>
                            <div className="d-flex align-items-center">
                                <button className="btn rounded mx-2 text-white" style={{ backgroundColor: "#1d0033" }}>History</button>
                                <button className="btn rounded mx-2 text-white" style={{ backgroundColor: "#1d0033" }}>Pool</button>
                            </div>
                        </div>
                        <BorderLinearProgress variant="determinate" value={60} />
                    </div>
                    <FootballLeague />
                </div>
            </div>
        </div>
    )
}

export default PredictOutcome;