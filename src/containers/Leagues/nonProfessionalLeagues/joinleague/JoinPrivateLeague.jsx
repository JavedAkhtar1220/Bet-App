import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form'
import Navbar from '../../../../components/Navbar';
import firebase from '../../../../config/firebase';
import FavTeam from '../../../../components/FavTeam';
import NavigationIcon from '@material-ui/icons/Navigation';
import BorderLinearProgress from '../../../../components/BorderLinearProgress';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CloseIcon from '@material-ui/icons/Close';
import swal from 'sweetalert';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import swal from 'sweetalert';

const JoinPrivateLeague = () => {

    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const [privateLeague, setPrivateLeague] = useState([]);
    const [selectedDetails, setSelectedDetails] = useState('');

    // const [username, setUsername] = useState('');
    const [uid, setUid] = useState('');
    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };


    useEffect(() => {

        document.title = "Sport Bet || Join Public League";
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase.firestore().collection('nonPL').where("type", "==", "private").get()
                    .then(doc => {
                        doc.forEach(element => {
                            setPrivateLeague(pre => {
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

    const joinLeague = data => {

        firebase.firestore().collection("nonPL").doc(selectedDetails.key).get()
            .then(doc => {
                if (doc.data().password === data.password) {
                    firebase.firestore().collection("joined_leagues").doc(uid).collection('list').doc(selectedDetails.key).set({
                        id: selectedDetails.key
                    })
                        .then(() => {
                            swal(`Welcome to the league ${selectedDetails.name}`);
                        })
                }
                else {
                    swal('Incorrect password');
                }
            })
    }

    const plValues = value => {
        setSelectedDetails(value);
    }

    const myLeagues = () => {
        history.push('/myleagues');
    }

    const createLeague = (data, e) => {
        console.log(e);
        // setBtnDisable(true);
        // var key = firebase.firestore().collection("nonPL").doc().id;
        // if (value === "public") {
        //     firebase.firestore().collection("nonPL").doc(key).set({
        //         name: data.leagueName,
        //         description: data.description,
        //         createdBy: username,
        //         type: "public",
        //         key,
        //         uid,
        //     })
        //         .then(() => {
        //             swal("Public League created successfully.")
        //                 .then((value) => {
        //                     setBtnDisable(false);
        //                     e.target.reset();
        //                 });
        //         })
        //         .catch(err => {
        //             setBtnDisable(false);
        //         })
        // }
        // else {
        //     firebase.firestore().collection("nonPL").doc(key).set({
        //         name: data.leagueName,
        //         description: data.description,
        //         createdBy: username,
        //         type: "public",
        //         key,
        //         password: data.password,
        //         uid,
        //     })
        //         .then(() => {
        //             swal("Private League created successfully.")
        //                 .then((value) => {
        //                     setBtnDisable(false);
        //                     e.target.reset();
        //                 });
        //         })
        //         .catch(err => {
        //             setBtnDisable(false);
        //         })
        // }
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
                    <h1 className="signup_title text-center mt-4">Join a Private League</h1>
                    <div className="mt-3 mb-5">
                        <p>List of available private leagues</p>
                        <BorderLinearProgress variant="determinate" value={60} />
                    </div>
                    <div className="text-right mb-3">
                        <button className="btn rounded text-white" style={{ backgroundColor: "#1d0033" }} onClick={myLeagues}>My Leagues</button>
                    </div>
                    {privateLeague.map((v, i) => {
                        return <div className="mb-3 border shadow rounded" style={{ backgroundColor: "#ebecec" }} key={i}>
                            <div className="d-flex justify-content-between px-4 py-2" >
                                <div>
                                    <p className="mb-0" style={{ fontWeight: 'bold' }}>{v.name}</p>
                                </div>
                                <div>
                                    {uid === v.uid ? <div></div> : <button className="btn_join rounded" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => plValues(v)}><ArrowForwardIcon /> Join</button>}
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

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Join the League {selectedDetails.name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><CloseIcon /></button>
                        </div>
                        <form onSubmit={handleSubmit(joinLeague)}>
                            <div className="modal-body">
                                <label htmlFor="password">Please enter the password</label>
                                <input
                                    type="text"
                                    name="password"
                                    className="form-control mt-2"
                                    ref={register({
                                        required: "Password in required",
                                    })}
                                />
                                {errors.password && <span className="small text-danger">
                                    {errors.password.message}
                                </span>}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Confirm</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default JoinPrivateLeague;