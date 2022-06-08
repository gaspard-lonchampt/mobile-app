import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetPodcast from '../services/GetPodcast';
import HomeScreen from '../screens/HomeScreen';
import Category from './Category'
import Programs from './Programs'


const PodcastStack = createNativeStackNavigator();

function Podcast() {
    return (
        <PodcastStack.Navigator>
            <PodcastStack.Screen name=" " component={HomeScreen} />
            <PodcastStack.Screen name="Display shows" component={GetPodcast} />
            <PodcastStack.Screen name="Categories" component={Category} />
            <PodcastStack.Screen name="Programmes" component={Programs} />
        </PodcastStack.Navigator>
    )
}

export default Podcast