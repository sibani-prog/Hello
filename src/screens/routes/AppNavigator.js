import React from 'react'; //<-------you forgot to import react

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'; //<---- you forgot to add this package
import Home from '../../screens/Home';
import List from '../../screens/List';
import Plant from '../PlantComponent/Plant';
import TrashScreen from '../TrashScreen/TrashScreen';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TrashScreen">
        <Stack.Screen
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Plant" component={Plant} />
        <Stack.Screen name="TrashScreen" component={TrashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
