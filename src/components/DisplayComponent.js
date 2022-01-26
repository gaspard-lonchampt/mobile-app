import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    Button,
    Pressable
} from 'react-native';
import { getPodcast } from '../services/FetchPodcast';

export default class DisplayComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            podcast: '',    
            error: false,
            data : '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        this.setState({ podcast: 'shows' }, () => { 
            getPodcast(this.state.podcast)
                .then((res) => {
                    if (res === undefined) {
                        this.setState({ error: 'Podcast not found' });
                    }
                    else {
                        this.setState({ data : res.data[0].id});
                    }
                });
        })
       
    }
    render() {
        let showErr = (
            this.state.error ?
                <Text>
                    {this.state.error}
                </Text> :
                <View></View>
        );
        let showData = (
            this.state.data ?
                <Text>
                    {this.state.data}
                </Text> :
                <View></View>
        )
        return (
            <View style={styles.main}>
                <Button
                    title={'Afficher Podcast'}
                    onPress={this.handleSubmit}
                    color='green' />
                <Text>{showErr}</Text>
                <Text>{showData}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        marginTop: 65,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#2a8ab7'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#111',
        alignSelf: 'center'
    },
    pressed: {
        height: 25,
        backgroundColor: 'green',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        justifyContent: 'center',
        width: '50%',
        fontSize: 18,
        color: 'white'
    }
});