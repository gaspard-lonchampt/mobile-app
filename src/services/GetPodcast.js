import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Button,
    Pressable,
    ActivityIndicator
} from 'react-native';
import React, { useEffect, useState } from "react"
import { ShowsView } from '../components/ShowsView';
import { EpisodesView } from '../components/EpisodesView';

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
    // console.log(type); 
    // const host = 'http://localhost:3001/';
    // const host = 'https://api.transistor.fm/v1/';

    let podcast = type.toLowerCase().trim();
    const URL = host.concat(podcast);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    var content;


    // const Conditional_rendering_from_route = (data) => {
    //     let type = props.route.params.route;
    //     console.log(data);
    //     if (type == 'shows') {
    //         return (
    //             <ShowsView data={data} /> 
    //         )
    //     } else if (type == 'episodes') {
    //         return <EpisodesView data={data} /> 
    //     } else {
    //         alert("ceci n'existe pas");
    //     }
    // }

    useEffect(() => {
        fetch(URL, requestOptions)
            .then(response => response.json())
            .then((responseJson) => {
                console.log('getting data from Transistor', responseJson)
                setData(responseJson);
                setLoading(false);
            })
            .catch(error => console.log('error', error));
    }, [])

    // useEffect(() => {
    //     content = Conditional_rendering_from_route(data);
    // }, [loading, data])

    console.log(loading)

    if(loading) {
        content = <ActivityIndicator /> 
    } else {
        if (type == 'shows') {
            return (
                <ShowsView data={data} />
            )
        } else if (type == 'episodes') {
            return <EpisodesView data={data} />
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
