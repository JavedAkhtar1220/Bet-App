import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import AppleIcon from '@material-ui/icons/Apple';
import firebase from '../config/firebase';
import { gProvider } from '../config/firebase';
import { fbProvider } from '../config/firebase';

const AuthWith = () => {

    const history = useHistory();

    const goToLogin = () => {
        history.push('/login');
    }

    const goToSignup = () => {
        history.push('/signup');
    }

    const googleSign = () => {

        firebase.auth().signInWithPopup(gProvider)
            .then(result => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                firebase.firestore().collection("users").doc(user.uid).set({
                    username: user.displayName,
                    email: user.email,
                    uid: user.uid,
                })
                    .then(() => {
                        firebase.firestore().collection("Favorite_teams").doc(user.uid).get()
                            .then(data => {
                                if (data.exists) {
                                    firebase.firestore().collection("Favorite_teams").doc(user.uid).get()
                                        .then(doc => {
                                            if (doc.exists) {
                                                var promise = new Promise((resolve) => {
                                                    resolve(localStorage.setItem("favorite_teams", JSON.stringify(doc.data().teams)));
                                                })
                                                promise.then(() => {
                                                    history.push('/home');
                                                })
                                            }
                                            else {
                                                history.push('/home');
                                            }
                                        })
                                }
                                else {
                                    history.push('/favoriteteam')
                                }
                            })
                    })
                    .catch(error => {
                        console.log("Error ", error)
                    })
            })
            .catch(function (error) {
                // Handle Errors here.
                // var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                // var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                // var credential = error.credential;
                console.log("Error ", errorMessage)
                // ...
            });
    }

    const fbSign = () => {
        firebase.auth().signInWithPopup(fbProvider)
            .then(result => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                firebase.firestore().collection("users").doc(user.uid).set({
                    username: user.displayName,
                    email: user.email,
                    uid: user.uid,
                })
                    .then(() => {
                        firebase.firestore().collection("Favorite_teams").doc(result.user.uid).get()
                            .then(data => {
                                if (data.exists) {
                                    firebase.firestore().collection("Favorite_teams").doc(result.user.uid).get()
                                        .then(doc => {
                                            if (doc.exists) {
                                                var promise = new Promise((resolve) => {
                                                    resolve(localStorage.setItem("favorite_teams", JSON.stringify(doc.data().teams)));
                                                })
                                                promise.then(() => {
                                                    history.push('/home');
                                                })
                                            }
                                            else {
                                                history.push('/home');
                                            }
                                        })
                                }
                                else {
                                    history.push('/favoriteteam');
                                }
                            })
                    })
                    .catch(error => {
                        console.log("Error ", error)
                    })
            })
            .catch(function (error) {
                // Handle Errors here.
                // var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                // var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                // var credential = error.credential;
                console.log("Error ", errorMessage)
                // ...
            });
    }

    useEffect(() => {
        document.title = "Sport Bet || Authenticate "
    }, [])

    return (
        <div className="bgColor" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
            <div className="row">
                <div className="col-lg-6 col-md-8 col-12 mx-auto bg-white rounded shadow pt-5 pb-5">
                    <div className="row">
                        <div className="col-6 mx-auto">
                            <button className="btn_custom shadow border" onClick={goToSignup}>
                                Signup
                            </button>
                            <div className="my-5">
                                <div className="separator text-muted">Or continue with</div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-4 mb-2">
                                    <button className="btn_social shadow" style={{ backgroundColor: "#4267b2" }} onClick={fbSign}>
                                        <FacebookIcon />
                                    </button>
                                </div>
                                <div className="col-lg-3 col-md-4 mb-2">
                                    <button className="btn_social shadow" style={{ backgroundColor: "#cf4332" }} onClick={googleSign}>
                                        G+
                                    </button>
                                </div>
                                <div className="col-lg-3 col-md-4 mb-2">
                                    <button className="btn_social shadow" style={{ backgroundColor: "#55acee" }}>
                                        <TwitterIcon />
                                    </button>
                                </div>
                                <div className="col-lg-3 col-md-4 mb-2">
                                    <button className="btn_social shadow" style={{ backgroundColor: "#000000" }}>
                                        <AppleIcon />
                                    </button>
                                </div>
                            </div>
                            <div className="my-5 text-center">
                                <p>Already have and account?</p>
                            </div>
                            <button className="btn_custom shadow border text-white" style={{ backgroundColor: "#1d0033" }} onClick={goToLogin}>
                                Login
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AuthWith;