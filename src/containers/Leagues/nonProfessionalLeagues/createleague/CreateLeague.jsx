import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useForm } from "react-hook-form";
import Navbar from '../../../../components/Navbar';
import firebase from '../../../../config/firebase';
import FavTeam from '../../../../components/FavTeam';
import NavigationIcon from '@material-ui/icons/Navigation';
import BorderLinearProgress from '../../../../components/BorderLinearProgress';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import swal from 'sweetalert';

const CreateLeague = () => {

    const history = useHistory();
    const [value, setValue] = useState('public');
    const [username, setUsername] = useState('');
    const [uid, setUid] = useState('');
    const { register, handleSubmit, errors } = useForm();
    const [btnDisable, setBtnDisable] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {

        document.title = "Sport Bet || Create League";
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                firebase.firestore().collection("users").doc(user.uid).get()
                    .then(data => {
                        setUsername(data.data().username);
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

    const createLeague = (data, e) => {
        setBtnDisable(true);
        var key = firebase.firestore().collection("nonPL").doc().id;
        if (value === "public") {
            firebase.firestore().collection("nonPL").doc(key).set({
                name: data.leagueName,
                description: data.description,
                createdBy: username,
                type: "public",
                key,
                uid,
            })
                .then(() => {
                    swal("Public League created successfully.")
                        .then((value) => {
                            setBtnDisable(false);
                            e.target.reset();
                        });
                })
                .catch(err => {
                    setBtnDisable(false);
                })
        }
        else {
            firebase.firestore().collection("nonPL").doc(key).set({
                name: data.leagueName,
                description: data.description,
                createdBy: username,
                type: "private",
                key,
                password: data.password,
                uid,
            })
                .then(() => {
                    swal("Private League created successfully.")
                        .then((value) => {
                            setBtnDisable(false);
                            e.target.reset();
                        });
                })
                .catch(err => {
                    setBtnDisable(false);
                })
            // console.log("private select keya hai");
        }
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
                    <h1 className="signup_title text-center mt-4">Create a Private League</h1>
                    <div className="mt-3 mb-5">
                        <p>Information</p>
                        <BorderLinearProgress variant="determinate" value={60} />
                    </div>
                    <form onSubmit={handleSubmit(createLeague)} className="mb-3">
                        <div className="mb-3">
                            <label htmlFor="name">Name of the league</label>
                            <input type="text"
                                className="signup_inpStyle shadow-sm border mt-2"
                                name="leagueName"
                                ref={register({
                                    required: "Email Address is required",
                                })}
                            />
                            {errors.leagueName && <span className="small text-danger">
                                {errors.leagueName.message}
                            </span>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Presentation of the league (Welcome Message)</label>
                            <textArea
                                className="create_league_txtarea w-100 shadow-sm border mt-2 px-4 py-2"
                                name="description"
                                ref={register({
                                    required: "Description required"
                                })}
                            >
                            </textArea>
                            {errors.description && <span className="small text-danger">
                                {errors.description.message}
                            </span>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="league">Access to the League</label>
                            <RadioGroup
                                row aria-label="gender"
                                name="selectLeague"
                                value={value}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="public" control={<Radio color="secondary" />} label="Public" />
                                <FormControlLabel value="private" control={<Radio color="secondary" />} label="Private" />
                            </RadioGroup>
                            {value === "public" ?
                                <div className="mt-3 mb-3">
                                    <p className="small">A public league is open to all; A Private league requires a password</p>
                                </div> :
                                <div className="mt-3 mb-3">
                                    <p className="small">A public league is open to all; A Private league requires a password</p>
                                    <div className="mb-3">
                                        <label htmlFor="name">Password</label>
                                        <input type="password"
                                            className="signup_inpStyle shadow-sm border mt-2"
                                            name="password"
                                            ref={register({
                                                required: "Password is required",
                                            })}
                                        />
                                        {errors.password && <span className="small text-danger">
                                            {errors.password.message}
                                        </span>}
                                    </div>
                                </div>}
                        </div>
                        <div className="mb-3">
                            {btnDisable ? <button className="disbtn_signup rounded" type="button">
                                <span className="spinner-grow spinner-grow-sm mr-2" role="status" aria-hidden="true"></span>
                                <span className="spinner-grow spinner-grow-sm mr-2" role="status" aria-hidden="true"></span>
                                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                            </button> : <button className="btn_signup" type="submit">Create League</button>}
                        </div>
                        {/* <button type="submit" className="btn_signup">
                            
                        </button> */}
                    </form>
                </div>
            </div>
        </div >
    )
}

export default CreateLeague;