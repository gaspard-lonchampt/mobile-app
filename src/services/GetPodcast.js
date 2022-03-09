import { View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from "react"
import { PodcastEpisodes } from '../screens/PodcastEpisodes';
import { PodcastShows } from '../screens/PodcastShows';

function GetPodcast(props) {

    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "TkQcw1R9NcobsN0CRTxWVw");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    const host = 'https://proxy-grenouille.herokuapp.com/';
    const type = props.route.params.route;
    // const type = 'shows';
    // console.log(type); 
    // const host = 'http://localhost:3001/';
    // const host = 'https://api.transistor.fm/v1/';

    let podcast = type.toLowerCase().trim();
    const URL = host.concat(podcast);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    var content;

    useEffect(() => {
        fetch(URL, requestOptions)
        // setLoading(true)
            .then(response => response.json())
            .then((responseJson) => {
                console.log('getting data from Transistor', responseJson)
                setData(responseJson);
                setLoading(false);
            })
            .catch(error => console.log('error', error));
            // setLoading(false)
    }, [])

    if(loading) {
        content = <ActivityIndicator /> 
    } else {
        if (type == 'shows') {
            return (
                <PodcastShows data={data} />
            )
        } else if (type == 'episodes') {
            return <PodcastEpisodes data={data} />
        } else {
            alert("ceci n'existe pas");
        }
    }

    console.log(content);
    return (
        <View>
            {content}
        </View>
    )
};

export default GetPodcast 
