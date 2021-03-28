import React from 'react';

const HLeague1 = () => {
    return (
        <div className="bgColor">
            <div className="row" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
                <div className="col-lg-6 col-md-8 col-12 mx-auto bg-white rounded shadow">
                    <div className="row">
                        <div className="col-lg-10 col-md-10 col-sm-10 col-10 mx-auto">
                            <h1 className="signup_title text-center mt-4">League 1</h1>
                            <p className="text-center">Select your favorite team</p>
                            <div className="mt-4 mb-4">
                                <button className="btn_custom shadow border text-white mb-3" style={{ backgroundColor: "#1d0033" }}>Team 1</button>
                                <button className="btn_custom shadow border text-white mb-3" style={{ backgroundColor: "#1d0033" }}>Team 2</button>
                                <button className="btn_custom shadow border text-white mb-3" style={{ backgroundColor: "#1d0033" }}>Team 3</button>
                                <button className="btn_custom shadow border text-white mb-3" style={{ backgroundColor: "#1d0033" }}>Team 4</button>
                                <button className="btn_custom shadow border text-white mb-3" style={{ backgroundColor: "#1d0033" }}>Team 5</button>
                                <button className="btn_custom shadow border text-white mb-3" style={{ backgroundColor: "#1d0033" }}>Team 6</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HLeague1;