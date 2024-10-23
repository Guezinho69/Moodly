import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login2 from './app/(tabs)/Login2'; // Assure-toi que le chemin est correct
import Form from './app/(tabs)/Form'; // Assure-toi que le chemin est correct
import ThankYouScreen from './app/(tabs)/ThankYouScreen'; // Assure-toi que le chemin est correct

export type RootStackParamList = {
  Login2: undefined;   // Aucun paramètre pour cet écran
  Form: undefined;     // Aucun paramètre pour cet écran
  ThankYouScreen: undefined; // Aucun paramètre pour cet écran
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login2">
        <Stack.Screen name="Login2" component={Login2} options={{ title: 'Connexion' }} />
        <Stack.Screen name="Form" component={Form} options={{ title: 'Formulaire' }} />
        <Stack.Screen name="ThankYouScreen" component={ThankYouScreen} options={{ title: 'Merci' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

