import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './views/HomeScreen';
import DetailsScreen from './views/DetailsScreen';
import Cases from './views/Cases';
import Locations from './views/Locations';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Personagens" component={DetailsScreen} />
        <Stack.Screen name="Episódios" component={Cases} />
        <Stack.Screen name="Localidades" component={Locations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
