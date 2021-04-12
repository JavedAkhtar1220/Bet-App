import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import firebase from '../config/firebase';

const Main = () => {

    const history = useHistory();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                history.push('/home');
            }
            else {
                history.push('/authentication');
            }
        })
    }, []);

    return (
        <div></div>
    )
}

export default Main;