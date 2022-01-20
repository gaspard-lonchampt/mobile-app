export const getPodcast = (type) => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "TkQcw1R9NcobsN0CRTxWVw");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',

    };

    const host = 'http://localhost:3001/';
    // const host = 'https://api.transistor.fm/v1/';
    // const host = 'https://api.github.com/users/';
    let podcast = type.toLowerCase().trim();
    const URL = host.concat(podcast);

    return fetch(URL, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}