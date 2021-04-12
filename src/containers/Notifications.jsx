import React from 'react';
import BorderLinearProgress from '../components/BorderLinearProgress';
import football from '../images/football.png';

const Notifications = () => {
    return (
        <div className="row mt-5">
            <div className="col-lg-8 col-md-8 col-sm-10 m-auto">
                <h1 className="signup_title text-center mt-5 mb-5">Notifications</h1>
                <div className="mt-3 mb-5">
                    <p>All notifications will be displayed here...</p>
                    <BorderLinearProgress variant="determinate" value={60} />
                </div>
                <div>
                    <div className="mb-3">
                        <div className="px-5 py-3 d-flex justify-content-between" style={{ backgroundColor: '#1d0033', borderRadius: "20px" }}>
                            <div className="d-flex">
                                <div>
                                    <img src={football} alt="Football" className="leagueImg" />
                                </div>
                                <div className="ml-5">
                                    <p className="lead mb-0 text-primary">Basketball results</p>
                                    <p className="mb-0 small text-white">All notifications will be
                                    displayed here...</p>
                                </div>
                            </div>
                            <div>
                                <p className="small mb-0 text-white">7 hrs</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="px-5 py-3 d-flex justify-content-between" style={{ backgroundColor: '#1d0033', borderRadius: "20px" }}>
                            <div className="d-flex">
                                <div>
                                    <img src={football} alt="Football" className="leagueImg" />
                                </div>
                                <div className="ml-5">
                                    <p className="lead mb-0 text-primary">Basketball results</p>
                                    <p className="mb-0 small text-white">All notifications will be
                                    displayed here...</p>
                                </div>
                            </div>
                            <div>
                                <p className="small mb-0 text-white">7 hrs</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="px-5 py-3 d-flex justify-content-between" style={{ backgroundColor: '#1d0033', borderRadius: "20px" }}>
                            <div className="d-flex">
                                <div>
                                    <img src={football} alt="Football" className="leagueImg" />
                                </div>
                                <div className="ml-5">
                                    <p className="lead mb-0 text-primary">Basketball results</p>
                                    <p className="mb-0 small text-white">All notifications will be
                                    displayed here...</p>
                                </div>
                            </div>
                            <div>
                                <p className="small mb-0 text-white">7 hrs</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="px-5 py-3 d-flex justify-content-between" style={{ backgroundColor: '#1d0033', borderRadius: "20px" }}>
                            <div className="d-flex">
                                <div>
                                    <img src={football} alt="Football" className="leagueImg" />
                                </div>
                                <div className="ml-5">
                                    <p className="lead mb-0 text-primary">Basketball results</p>
                                    <p className="mb-0 small text-white">All notifications will be
                                    displayed here...</p>
                                </div>
                            </div>
                            <div>
                                <p className="small mb-0 text-white">7 hrs</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="px-5 py-3 d-flex justify-content-between" style={{ backgroundColor: '#1d0033', borderRadius: "20px" }}>
                            <div className="d-flex">
                                <div>
                                    <img src={football} alt="Football" className="leagueImg" />
                                </div>
                                <div className="ml-5">
                                    <p className="lead mb-0 text-primary">Basketball results</p>
                                    <p className="mb-0 small text-white">All notifications will be
                                    displayed here...</p>
                                </div>
                            </div>
                            <div>
                                <p className="small mb-0 text-white">7 hrs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications;