import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './views/HomeScreen';
import Locations from './views/Locations';
import Characters from './views/Characters';
import Episodes from './views/Episodes';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Personagens" component={Characters} />
        <Stack.Screen name="Episódios" component={Episodes} />
        <Stack.Screen name="Localidades" component={Locations} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
