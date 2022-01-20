import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetPodcast from '../services/GetPodcast';
import HomeScreen from '../screens/HomeScreen';

const PodcastStack = createNativeStackNavigator();

function Podcast() {
    return (
        <PodcastStack.Navigator>
            <PodcastStack.Screen name=" " component={HomeScreen} />
            <PodcastStack.Screen name="Display shows" component={GetPodcast} />
        </PodcastStack.Navigator>
    )
}

export default Podcast