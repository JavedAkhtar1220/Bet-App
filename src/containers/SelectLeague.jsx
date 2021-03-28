import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const SelectLeague = () => {
    const history = useHistory();

    const goToPL = () => {
        history.push('/professionalleague');
    }

    const goToNPL = () => {
        history.push('/nonprofessionalleague');
    }

    useEffect(() => {
        document.title = "Sport Bet || Select League";
    }, [])



    return (
        <div className="bgColor">
            <div className="row" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
                <div className="col-lg-6 col-md-8 col-12 mx-auto bg-white rounded shadow">
                    <div className="row">
                        <div className="col-lg-10 col-md-10 col-sm-10 col-10 mx-auto">
                            <h1 className="signup_title text-center mt-4">Select League</h1>
                            <div className="mt-4 mb-4">
                                <button className="btn_custom shadow border text-white mb-2" style={{ backgroundColor: "#1d0033" }} onClick={goToPL}>Professional League</button>
                                <button className="btn_custom shadow border text-white mb-2" style={{ backgroundColor: "#1d0033" }} onClick={goToNPL}>Non Professional League</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectLeague;