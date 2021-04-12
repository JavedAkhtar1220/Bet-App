import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Cover from '../components/Cover';
import firebase from '../config/firebase';
import { useHistory } from 'react-router';

const Home = () => {

    const history = useHistory();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                
            }
            else {
                history.push('authentication');
            }
        })
    })
    return (
        <div>
            <Navbar />
            <Cover />
        </div>
    )
}

export default Home;