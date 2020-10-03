import React, { useState, useEffect } from 'react';
import { poster_url, poster_url_large, profile_url, movieId_url, basic_url, api_key } from '../../config'; 
import crewStyle from '../css/Credits.module.css';

function Credits({movieId}) {
    const [Actors, setActors] = useState([])
    const [Crew, setCrew] = useState([])
    var blank = require('../../..//blank_avatar.png');


    useEffect(() => {
        const crewEndpoint = `${basic_url}${movieId}/credits?api_key=${api_key}`;
        fetchCrew(crewEndpoint)
    }, [])

    const fetchCrew = (crewEndpoint) => {
        fetch(crewEndpoint)
        .then(crew => crew.json())
        .then(crew => {
            setActors(crew.cast)
            setCrew(crew.crew)
        })
    }
    function getAvatar(image){
        const pic = `${profile_url}${(image)}`;
        if(image == null){
            return blank;
        }
            return pic;
    }

        return (
            <div>
                <div className={crewStyle.actor_container}>
                    {Actors.map(function(actor){
                        return(
                            <div className={crewStyle.actor_card}>
                                <img className={crewStyle.avatar} src={getAvatar(actor.profile_path)}/>
                                <div className={crewStyle.actorName}>{actor.name}</div>
                                <div className={crewStyle.characterName}>{actor.character}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }



export default Credits;
