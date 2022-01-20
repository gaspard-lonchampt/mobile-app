import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Podcast from '../components/Podcast';
import Library from '../components/Library';
import Search from '../components/Search';
import Direct from '../components/Direct';

const Tab = createBottomTabNavigator();

function Navigations() {
  return (
    <Tab.Navigator
      initialRouteName="Podcast"
      screenOptions={{
        tabBarActiveTintColor: '#1DB558',
      }}
    >
      <Tab.Screen
        name="Podcast"
        component={Podcast}
        options={{
          tabBarLabel: 'Podcast',
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="podcast" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bookshelf" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Direct"
        component={Direct}
        options={{
          tabBarLabel: 'Direct',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="access-point" color={color} size={size} />
          ),
        }} />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigations