import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import firebase from '../config/firebase';

const Navbar = () => {

    const ancher = "#";

    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged(user => {
    //         firebase.firestore().collection("users").where("uid", "==", user.uid).get()
    //             .then(doc => {
    //                 if (doc.empty) {
    //                     console.log("khali hai");
    //                 }
    //                 else {
    //                     doc.forEach(element => {
    //                         console.log(element.data());
    //                     })
    //                 }
    //             })
    //     })
    // })

    const signout = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
            <div className="container">
                <span className="navbar-brand mb-0 h1">Bet App</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to='/home' className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/profile' className="nav-link">Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={ancher} onClick={signout}>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;