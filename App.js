import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getToken} from './TokensData/getToken';
import Login from './Screens/Login';
import Post from './Screens/Posts';

const Stack = createNativeStackNavigator();

function App() {
  React.useEffect(() => {
    getToken('TOKEN').then(token => {
      global.token = token;
    });
  }),
    [];

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="post"
          component={Post}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
