import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Navbar from '../../../../components/Navbar';
import firebase from '../../../../config/firebase';
import FavTeam from '../../../../components/FavTeam';
import NavigationIcon from '@material-ui/icons/Navigation';
import BorderLinearProgress from '../../../../components/BorderLinearProgress';

const MyLeagues = () => {

    const history = useHistory();
    const [myLeagues, setMyLeagues] = useState([]);
    // const [value, setValue] = useState('public');

    // const [btnDisable, setBtnDisable] = useState(false);

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };

    useEffect(() => {

        document.title = "Sport Bet || Create League";
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase.firestore().collection("nonPL").where('uid', '==', user.uid).get()
                    .then(doc => {
                        doc.forEach(element => {
                            setMyLeagues(pre => {
                                return [
                                    ...pre,
                                    element.data()
                                ]
                            })
                        })
                    })
                // firebase.firestore().collection("users").doc(user.uid).get()
                //     .then(data => {
                //         setUsername(data.data().username);
                //         setUid(user.uid);
                //     })
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
    //             type: "private",
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
    //         // console.log("private select keya hai");
    //     }

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
                    <h1 className="signup_title text-center mt-4">My Leagues</h1>
                    <div className="mt-3 mb-5">
                        <p>List of public and private leagues</p>
                        <BorderLinearProgress variant="determinate" value={60} />
                    </div>
                    {myLeagues.map((v, i) => {
                        return <div className="mb-3 border shadow rounded" style={{ backgroundColor: "#ebecec" }} key={i}>
                            <div className="d-flex justify-content-between px-4 py-2" >
                                <div>
                                    <p className="mb-0" style={{ fontWeight: 'bold' }}>{v.name}</p>
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
        </div>
    )
}

export default MyLeagues;