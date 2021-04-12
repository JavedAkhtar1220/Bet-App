import React, { useEffect, useState } from 'react';
import firebase from '../config/firebase';


const FavTeam = () => {

    const [favTeams, setFavTeams] = useState([]);


    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                const getTeams = JSON.parse(localStorage.getItem('favorite_teams'));
                if (getTeams) {
                    setFavTeams(getTeams);
                }
            }
            else {

            }
        })
    }, [])

    return (
        <div className="mt-3 mb-3 favTeamDiv">
            <div className="container">
                <h2 className="lead text-white mt-3">Your favorite team</h2>
                <div className="table-responsive ">
                    <table className="table table-sm table-borderless text-center">
                        <tbody>
                            <tr>
                                {favTeams.map((v, i) => {
                                    return <td key={i}>
                                        <div className="fav_team_name">
                                            {v}
                                        </div>
                                    </td>
                                })}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default FavTeam;