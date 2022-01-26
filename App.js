import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchComponent from './src/components/SearchComponent';
import DisplayComponent from './src/components/DisplayComponent';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Aller à détails"
        onPress={() => {
          navigation.navigate('Details', {
            itemId: 66,
            Description: 'La Patate',
          });
        }}
      />
      <Button title="Recherche" onPress={() => navigation.navigate('Search')} />
      <Button title="Affichage" onPress={() => navigation.navigate('Display')} />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { itemId, Description } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>Description: {JSON.stringify(Description)}</Text>
      <Button
        title="Aller à détails encore !"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Search" component={SearchComponent} />
        <Stack.Screen name="Display" component={DisplayComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
