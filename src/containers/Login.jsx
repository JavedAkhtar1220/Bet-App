import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
// import PersonIcon from '@material-ui/icons/Person';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NavigationIcon from '@material-ui/icons/Navigation';
import BorderLinearProgress from '../components/BorderLinearProgress';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import firebase from '../config/firebase';
import '../App.css';

const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const [btnDisable, setBtnDisable] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [open, setOpen] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const history = useHistory();


    const handleChange = () => {
        if (showPassword) {
            setShowPassword(false);
        }
        else {
            setShowPassword(true);
        }
    }

    const goToAuthWith = () => {
        history.push('/authentication')
    }

    useEffect(() => {
        document.title = "Sport Bet || Login "
    }, [])

    const onSubmit = data => {
        setBtnDisable(true);
        setOpen(false);
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
            .then(user => {
                var current_user = firebase.auth().currentUser;
                console.log()
                if (current_user.emailVerified) {
                    firebase.firestore().collection("Favorite_teams").doc(user.user.uid).get()
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
                                history.push('/favoriteteam');
                            }
                        })
                }
                else {
                    setBtnDisable(false);
                    setOpen(true);
                    setErrorMsg("Invalid email or password")
                }

            })
            .catch((error) => {
                setBtnDisable(false);
                var errorMessage = error.message;
                setErrorMsg(errorMessage);
                setOpen(true);
                // ..
            });
    }

    return (
        <div className="bgColor">
            <div className="row" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
                <div className="col-lg-6 col-md-8 col-12 mx-auto bg-white rounded shadow">
                    <div className="row">
                        <div className="col-lg-10 col-md-10 col-sm-10 col-10 mx-auto">
                            <div className="mt-4">
                                <button className="btn_back" onClick={goToAuthWith}>
                                    <NavigationIcon className="back_icon" />
                                    <span className="ml-1">Back</span>
                                </button>
                            </div>
                            <h1 className="signup_title mt-4">Login to your account</h1>
                            <div className="mt-3 mb-5">
                                <p>Please fill out the all necessary fields properly...</p>
                                <BorderLinearProgress variant="determinate" value={60} />
                            </div>

                            <div className="mb-3">
                                <Collapse in={open}>
                                    <Alert
                                        severity="error"
                                        action={
                                            <IconButton
                                                aria-label="close"
                                                color="inherit"
                                                size="small"
                                                onClick={() => {
                                                    setOpen(false);
                                                }}
                                            >
                                                <CloseIcon fontSize="inherit" />
                                            </IconButton>
                                        }
                                    >
                                        {errorMsg}!
                                    </Alert>
                                </Collapse>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>

                                {/* Email TextField */}
                                <div className="mb-3">
                                    <label htmlFor="email">Email</label>
                                    <div style={{ position: "relative" }}>
                                        <i className="icon"><MailIcon /></i>
                                        <input type="text"
                                            className="signup_inpStyle shadow-sm border mt-2"
                                            name="email"
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

                                {/* Password TextField */}
                                <div className="mb-3">
                                    <label htmlFor="password">Password</label>
                                    <div style={{ position: "relative" }}>
                                        <i className="icon"><LockIcon /></i>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className="signup_inpStyle shadow-sm border mt-2"
                                            name="password"
                                            ref={register({
                                                required: "Password is required",
                                            })} />
                                    </div>
                                    {errors.password && <span className="small text-danger">
                                        {errors.password.message}
                                    </span>}
                                    <div>
                                        <FormControlLabel
                                            value="end"
                                            control={<Checkbox color="primary" />}
                                            label="Show Password"
                                            className="font-poppins"
                                            labelPlacement="end"
                                            onChange={handleChange}
                                            checked={showPassword}
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    {btnDisable ? <button className="disbtn_signup rounded" type="button">
                                        <span className="spinner-grow spinner-grow-sm mr-2" role="status" aria-hidden="true"></span>
                                        <span className="spinner-grow spinner-grow-sm mr-2" role="status" aria-hidden="true"></span>
                                        <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                    </button> : <button className="btn_signup" type="submit">Login</button>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;