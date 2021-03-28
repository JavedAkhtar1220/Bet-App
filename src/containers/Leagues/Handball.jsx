import React from 'react';
import { useHistory } from 'react-router';

const Handball = () => {

    const history = useHistory();

    const goToLeague1 = () => {
        history.push('/handballleague1');
    }

    const goToLeague2 = () => {
        history.push('/handballleague2');
    }

    const goToLeague3 = () => {
        history.push('/handballleague3');
    }

    return (
        <div>
            <div className="bgColor">
                <div className="row" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
                    <div className="col-lg-6 col-md-8 col-12 mx-auto bg-white rounded shadow">
                        <div className="row">
                            <div className="col-lg-10 col-md-10 col-sm-10 col-10 mx-auto">
                                <h1 className="signup_title text-center mt-4">Select Handball League</h1>
                                <div className="mt-4 mb-4">
                                    <button className="btn_custom shadow border text-white mb-3" style={{ backgroundColor: "#1d0033" }} onClick={goToLeague1}>League 1</button>
                                    <button className="btn_custom shadow border text-white mb-3" style={{ backgroundColor: "#1d0033" }} onClick={goToLeague2}>League 2</button>
                                    <button className="btn_custom shadow border text-white mb-3" style={{ backgroundColor: "#1d0033" }} onClick={goToLeague3}>League 3</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Handball;