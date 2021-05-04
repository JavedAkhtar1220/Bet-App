import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useForm } from "react-hook-form";
import Navbar from '../../../../components/Navbar';
import firebase from '../../../../config/firebase';
import FavTeam from '../../../../components/FavTeam';
import NavigationIcon from '@material-ui/icons/Navigation';
import BorderLinearProgress from '../../../../components/BorderLinearProgress';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import swal from 'sweetalert';

const JoinPublicLeague = () => {

    const history = useHistory();
    const [publicLeague, setPublicLeague] = useState([]);
    // const [username, setUsername] = useState('');
    const [uid, setUid] = useState('');
    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };

    useEffect(() => {

        document.title = "Sport Bet || Join Public League";
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase.firestore().collection('nonPL').where("type", "==", "public").get()
                    .then(doc => {
                        doc.forEach(element => {
                            setPublicLeague(pre => {
                                return [
                                    ...pre,
                                    element.data()
                                ]
                            })
                        })
                    })
                firebase.firestore().collection("users").doc(user.uid).get()
                    .then(data => {
                        setUid(user.uid);
                    })
            }
            else {
                history.push('/authentication');
            }
        })
    }, []);

    const goToBack = () => {
        history.goBack();
    }

    // const createLeague = (data, e) => {
    //     setBtnDisable(true);
    //     var key = firebase.firestore().collection("nonPL").doc().id;
    //     if (value === "public") {
    //         firebase.firestore().collection("nonPL").doc(key).set({
    //             name: data.leagueName,
    //             description: data.description,
    //             createdBy: username,
    //             type: "public",
    //             key,
    //             uid,
    //         })
    //             .then(() => {
    //                 swal("Public League created successfully.")
    //                     .then((value) => {
    //                         setBtnDisable(false);
    //                         e.target.reset();
    //                     });
    //             })
    //             .catch(err => {
    //                 setBtnDisable(false);
    //             })
    //     }
    //     else {
    //         firebase.firestore().collection("nonPL").doc(key).set({
    //             name: data.leagueName,
    //             description: data.description,
    //             createdBy: username,
    //             type: "public",
    //             key,
    //             password: data.password,
    //             uid,
    //         })
    //             .then(() => {
    //                 swal("Private League created successfully.")
    //                     .then((value) => {
    //                         setBtnDisable(false);
    //                         e.target.reset();
    //                     });
    //             })
    //             .catch(err => {
    //                 setBtnDisable(false);
    //             })
    //     }
    // }

    const joinLeague = value => {
        swal({
            title: "Confirmation",
            text: `Are you sure you want to join the league ${value.name}?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willJoin) => {
                if (willJoin) {
                    firebase.firestore().collection("joined_leagues").doc(uid).collection('list').doc(value.key).set({
                        id: value.key
                    })
                        .then(() => {
                            swal(`Welcome to the league ${value.name}`)
                        })
                }
            });
    }

    const myLeagues = () => {
        history.push('/myleagues');
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
                    <div className="mt-4">
                        <button className="btn_back" onClick={goToBack}>
                            <NavigationIcon className="back_icon" />
                            <span className="ml-1">Back</span>
                        </button>
                    </div>
                    <FavTeam />
                    <h1 className="signup_title text-center mt-4">Join a Public League</h1>
                    <div className="mt-3 mb-5">
                        <p>List of available public leagues</p>
                        <BorderLinearProgress variant="determinate" value={60} />
                    </div>
                    <div className="text-right mb-3">
                        <button className="btn rounded text-white" style={{ backgroundColor: "#1d0033" }} onClick={myLeagues}>My Leagues</button>
                    </div>
                    {publicLeague.map((v, i) => {
                        return <div className="mb-3 border shadow rounded" style={{ backgroundColor: "#ebecec" }} key={i}>
                            <div className="d-flex justify-content-between px-4 py-2" >
                                <div>
                                    <p className="mb-0" style={{ fontWeight: 'bold' }}>{v.name}</p>
                                </div>
                                <div>
                                    {uid === v.uid ? <div></div> : <button className="btn_join rounded" onClick={() => joinLeague(v)}><ArrowForwardIcon /> Join</button>}

                                </div>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between px-4 py-2" >
                                <div>
                                    <p className="mb-0 small">{v.description}</p>
                                </div>
                                <div>
                                    <p className="mb-0 small">Created by <span style={{ fontWeight: "bold" }}>{v.createdBy}</span></p>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div >
    )
}

export default JoinPublicLeague;