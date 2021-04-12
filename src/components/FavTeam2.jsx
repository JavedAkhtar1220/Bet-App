import React, { useEffect, useState } from 'react';
import firebase from '../config/firebase';


const FavTeam2 = () => {

    const [favTeam, setFavTeam] = useState("");


    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                const getTeam = localStorage.getItem('fav_team');
                setFavTeam(getTeam);
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
                                <td>
                                    <div className="fav_team_name">
                                        {favTeam}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default FavTeam2;