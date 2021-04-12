import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import plImg from '../images/pl.png';
import nplImg from '../images/npl.png';
import FavTeam from '../components/FavTeam';
import firebase from '../config/firebase';


const Cover = () => {

    const history = useHistory();
    const [username, setUsername] = useState();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase.firestore().collection('users').doc(user.uid).get()
                    .then(user => {
                        setUsername(user.data().username);
                    })
            }
        })
    })

    const gotoProfessionalLeague = () => {
        history.push('professionalleague');
    }

    const gotoNonProfessionalLeague = () => {
        history.push('nonprofessionalleague');
    }

    return (
        <div>
            <div className="cover_img">
                <div className="container">
                    <h2 className="text-white">Hello! <br /> {username}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-8 m-auto">
                    <FavTeam />
                    <h1 className="signup_title text-center mt-4">Select League</h1>
                    <div className="row mt-5">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <button className="btn_custom shadow border mb-2 p-4" onClick={gotoProfessionalLeague}>
                                <div>
                                    <img src={plImg} alt="professional league" className="leagueImg" />
                                </div>
                                Professional League
                            </button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                            <button className="btn_custom shadow border mb-2 p-4" onClick={gotoNonProfessionalLeague}>
                                <div>
                                    <img src={nplImg} alt="professional league" className="leagueImg" />
                                </div>
                                Non Professional League
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cover;