import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './src/navigations/Navigations';

function App() {
  return (

    <NavigationContainer>
      <Navigations />
    </NavigationContainer>
  );
}



export default App;

/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Category from './src/category';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Programs from './src/programs';



function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="PROGRAMMES"
        onPress={() => navigation.navigate('Category')}
      />
    </View>
  );
}

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }




export default function App() {

  const Stack = createNativeStackNavigator();


return (

  
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Overview' }}
      />
      <Stack.Screen 
        name="Category" 
        component={Category} />
      <Stack.Screen 
        name="Programs" 
        component={Programs}
        options={({ route }) => ({ articleId: route.params.idCat })} />
      </Stack.Navigator>
    </NavigationContainer>
  );


}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abf',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

