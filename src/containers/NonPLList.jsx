import React, { useEffect } from 'react';

const NPLeagueList = () => {

    useEffect(() => {
        document.title = "Sport Bet || Non-Professional League";
    }, []);

    return (
        <div className="bgColor">
            <div className="row" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
                <div className="col-lg-6 col-md-8 col-12 mx-auto bg-white rounded shadow">
                    <div className="row">
                        <div className="col-lg-10 col-md-10 col-sm-10 col-10 mx-auto">
                            <h1 className="signup_title text-center mt-4">Non Professional League</h1>
                            <div className="mt-4 mb-4">
                                <button className="btn_custom shadow border text-white mb-3" style={{ backgroundColor: "#1d0033" }}>Football</button>
                                <button className="btn_custom shadow border text-white mb-3" style={{ backgroundColor: "#1d0033" }}>Futsal</button>
                                <button className="btn_custom shadow border text-white mb-3" style={{ backgroundColor: "#1d0033" }}>BasketBall</button>
                                <button className="btn_custom shadow border text-white mb-3" style={{ backgroundColor: "#1d0033" }}>Handball</button>
                                <button className="btn_custom shadow border text-white mb-3" style={{ backgroundColor: "#1d0033" }}>Cyclisme </button>
                                <button className="btn_custom shadow border text-white mb-3" style={{ backgroundColor: "#1d0033" }}>Boeuf Tirants</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NPLeagueList;