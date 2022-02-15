import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetPodcast from '../services/GetPodcast';


// const PodcastScreen = <Stack.Screen name="Display shows" component={Podcast} />

// function HomeScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Accueil</Text>
//             <Button title="Affichage show podcast" onPress={() => navigation.navigate('Display shows', { route: 'shows' })} />
//         </View>
//     );
// }   

// function Nav() {
//   return (
//         <Stack.Screen name="Display shows" component={GetPodcast} />
//   );
// }

// export default HomeScreen