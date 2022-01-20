import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Affichage show podcast" onPress={() => navigation.navigate('Display shows', { route: 'shows' })} />
            </View>
        );
    }   

export default HomeScreen