import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Navbar from '../components/Navbar';
// import football from '../../../images/football.png';
import BorderLinearProgress from '../components/BorderLinearProgress';
import firebase from '../config/firebase';
import '../App.css';


const data = [
    {
        name: "Manchester United",
        logo: "https://media.api-sports.io/football/teams/33.png"
    },
    {
        name: "Newcastle",
        logo: "https://media.api-sports.io/football/teams/34.png"
    },
    {
        name: "Bournemouth",
        logo: "https://media.api-sports.io/football/teams/35.png"
    },
    {
        name: "Watford",
        logo: "https://media.api-sports.io/football/teams/38.png"
    },
    {
        name: "Wolves",
        logo: "https://media.api-sports.io/football/teams/39.png"
    },
    {
        name: "Liverpool",
        logo: "https://media.api-sports.io/football/teams/40.png"
    },
    {
        name: "Southampton",
        logo: "https://media.api-sports.io/football/teams/41.png"
    },
    {
        name: "Arsenal",
        logo: "https://media.api-sports.io/football/teams/42.png"
    },
    {
        name: "Burnley",
        logo: "https://media.api-sports.io/football/teams/44.png"
    },
    {
        name: "Everton",
        logo: "https://media.api-sports.io/football/teams/45.png"
    },

]

const FavoriteTeam = () => {

    const history = useHistory();
    const [totalCount] = useState(10);
    const [count, setCount] = useState(0);
    const [uid, setUid] = useState();
    const [favTeamArr, setFavTeamArr] = useState([]);
    const [username, setUsername] = useState("");

    const handleCheck = e => {

        if (e.target.checked) {
            setFavTeamArr(pre => {
                return [
                    ...pre,
                    e.target.name
                ]
            });
            setCount(count + 1);
        }
        else {
            setFavTeamArr(favTeamArr.filter(team => team !== e.target.name));
            setCount(count - 1);
        }
    }

    const addFavTeam = () => {
        if (favTeamArr.length === 0) {
            alert("Select Fav Team to continue");
        }
        else if (favTeamArr.length < 3) {
            alert("Please select atleat 3 fav teams");
        }
        else {
            firebase.firestore().collection("Favorite_teams").doc(uid).set({
                teams: favTeamArr,
            })
                .then(() => {
                    localStorage.setItem("favorite_teams", JSON.stringify(favTeamArr));
                })
                .then(() => {
                    history.push('/home');
                })
        }
    }


    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setUid(user.uid);
                firebase.firestore().collection('users').doc(user.uid).get()
                    .then(user => {
                        setUsername(user.data().username);
                    })
            }
        })
    })

    return (
        <div>
            <Navbar />
            <div className="cover_img">
                <div className="container">
                    <h2 className="text-white">Hello! <br /> {username}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-8 m-auto">

                    <div className="mt-3 mb-5">
                        <h1 className="signup_title mt-4">Select your favorite team...</h1>
                        <div className="mt-3 mb-5">
                            <p>Games</p>
                            <BorderLinearProgress variant="determinate" value={60} />
                            <div className="mt-3 text-right">
                                {count} / {totalCount}
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="main_container">
                            {data.map((v, i) => {
                                return <label className="option_item" key={i}>
                                    <input type="checkbox" className="checkbox" name={v.name} onChange={handleCheck} />
                                    <div className="option_inner facebook">
                                        <div className="tickmark"></div>
                                        <img src={v.logo} alt={v.name} className="img-fluid" style={{ marginTop: "-15px" }} />
                                    </div>
                                </label>
                            })}
                        </div>
                        <div>
                            <button className="btn_signup" onClick={addFavTeam}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavoriteTeam;