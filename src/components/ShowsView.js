import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import React, { useEffect, useState } from "react"
import { FlatList } from 'react-native-web';

export const ShowsView = (props) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f9c2ff',
            flexDirection: "row",
            marginVertical: 8,
            marginHorizontal: 16,
        },
        item: {
            padding: 20,
        },
        stretch: {
            width: 200,
            height: 200,
            resizeMode: 'stretch',
        },
        title: {
            fontSize: 32,
        },
    });

    const Item = ({ type, id, title, description, image }) => (
        <View style={styles.container}>
            <Image style={styles.stretch} source={{ uri: image }} />
            <Text style={styles.item}>{type}</Text>
            <Text style={styles.item}>{id}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.item}>{description}</Text>
        </View>
    );

    const renderItem = ({ item }) => (
        <Item 
        type={item.type} 
        id={item.id} 
        image={item.attributes.image_url}
        title={item.attributes.title}
        description={item.attributes.description}    
        />
    );

    console.log("ici composant")

    return (
        <FlatList
            data={props.data.data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />

    );
}