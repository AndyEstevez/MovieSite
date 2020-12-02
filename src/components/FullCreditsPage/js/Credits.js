import React, { useState, useEffect } from 'react';
import { profile_url, basic_url, api_key } from '../../config'; 
import crewStyle from '../css/Credits.module.css';

function Credits({movieId}) {
    const [Actors, setActors] = useState([])
    const [Crew, setCrew] = useState([])
    var blank = require('../../..//blank_avatar.png');


    useEffect(() => {
        const crewEndpoint = `${basic_url}${movieId}/credits?api_key=${api_key}`;
        fetchCrew(crewEndpoint)
    }, [])

    // API request to get the actors and rest of the crew and
    // set the state hooks 'Actors & Crew' to the response results
    const fetchCrew = (crewEndpoint) => {
        fetch(crewEndpoint)
        .then(crew => crew.json())
        .then(crew => {
            setActors(crew.cast)
            setCrew(crew.crew)
            console.log(crew.crew)
        })
    }

    // function to check if the actor has a profile picture
    // if they don't its set to a blank picture
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
                    {/* Looping through the state hook 'Actors' and creating a card for each actor in the movie*/}
                    {Actors.map(function(actor){
                        return(
                            <div className={crewStyle.actor_card} key={actor.name}>
                                <img className={crewStyle.avatar} src={getAvatar(actor.profile_path)} alt={actor.name}/>
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
