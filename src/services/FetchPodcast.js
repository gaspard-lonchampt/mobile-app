export const getPodcast =  async (type) => {

    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "TkQcw1R9NcobsN0CRTxWVw");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    const host = 'https://proxy-grenouille.herokuapp.com/';
    // const host = 'http://localhost:3001/';
    // const host = 'https://api.transistor.fm/v1/';
    let podcast = type.toLowerCase().trim();
    const URL = host.concat(podcast);

    let response = await fetch(URL, requestOptions)
        .then(response => response.json())
        .then((responseJson) => {
            console.log('getting data from Transistor', responseJson)
            return responseJson
        })
        .catch(error => console.log('error', error));
    return response
}