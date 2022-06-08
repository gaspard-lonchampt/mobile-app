import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Tous les podcast" onPress={() => navigation.navigate('Display shows', { route: 'shows' })} />
                <Button title="Podcast par catégories" onPress={() => navigation.navigate('Categories', { route: 'shows' })} />
            </View>
        );
    }   

export default HomeScreen