import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../components/Navbar';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import firebase from '../config/firebase';
import BorderLinearProgress from '../components/BorderLinearProgress';

const Profile = () => {

    const { register, handleSubmit, errors } = useForm();
    const [btnDisable] = useState(false);
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        // firebase.firestore().collection('users').doc().get()
        //     .then(doc => {
        //         doc.forEach(element => {
        //             console.log(element.id);
        //             setUserData(pre => {
        //                 return [
        //                     ...pre,
        //                     element.data()
        //                 ]
        //             })
        //         })
        //     })
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase.firestore().collection("users").doc(user.uid).get()
                    .then(doc => {
                        setUserData(pre => {
                            return [
                                ...pre,
                                doc.data()
                            ]
                        })
                    })
            }
            else {

            }
        })
    }, []);

    const onSubmit = data => {
        console.log();
    }
    return (
        <div>
            <Navbar />
            <div className="cover_img">
                <div className="container">
                    <h2 className="text-white">Edit <br /> Your profile...</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-8 m-auto">
                    {/* <div className="mt-4">
                        <button className="btn_back" onClick={goToBack}>
                            <NavigationIcon className="back_icon" />
                            <span className="ml-1">Back</span>
                        </button>
                    </div> */}
                    <div className="mt-3 mb-5 mt-5">
                        <p>Please fill out the all necessary fields properly...</p>
                        <BorderLinearProgress variant="determinate" value={60} />

                        {userData.map((v, i) => {
                            return <form onSubmit={handleSubmit(onSubmit)} className="mt-5">

                                {/* Name TextField */}
                                <div className="mb-3">
                                    <label htmlFor="email">Name</label>
                                    <div style={{ position: "relative" }}>
                                        <i className="icon"><PersonIcon /></i>
                                        <input type="text"
                                            className="signup_inpStyle shadow-sm border mt-2"
                                            name="username"
                                            value={v.username}
                                            ref={register({
                                                required: "Username is required",
                                            })} />
                                    </div>
                                    {errors.username && <span className="small text-danger">
                                        {errors.username.message}
                                    </span>}
                                </div>

                                {/* Email TextField */}
                                <div className="mb-3">
                                    <label htmlFor="email">Email<span style={{ color: "red" }}>*</span></label>
                                    <div style={{ position: "relative" }}>
                                        <i className="icon"><MailIcon /></i>
                                        <input type="text"
                                            className="signup_inpStyle shadow-sm border mt-2"
                                            name="email"
                                            value={v.email}
                                            ref={register({
                                                required: "Email Address is required",
                                                pattern: {
                                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                    message: "Email address is invalid",
                                                }
                                            })} />
                                    </div>
                                    {errors.email && <span className="small text-danger">
                                        {errors.email.message}
                                    </span>}
                                </div>


                                <div className="mb-3">
                                    {btnDisable ? <button className="disbtn_signup rounded" type="button">
                                        <span className="spinner-grow spinner-grow-sm mr-2" role="status" aria-hidden="true"></span>
                                        <span className="spinner-grow spinner-grow-sm mr-2" role="status" aria-hidden="true"></span>
                                        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                    </button> : <button className="btn_signup" type="submit">Update</button>}
                                </div>
                            </form>
                        })}

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Profile;