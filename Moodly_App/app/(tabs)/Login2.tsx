import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App'; // Assure-toi que le chemin est correct
import { Link, router } from 'expo-router';


type Login2ScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login2'>;

type Props = {
  navigation: Login2ScreenNavigationProp;
};

const Login2: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log('Navigation:', navigation);

  const handleLogin = () => {
    if (email && password) {
      Alert.alert('Connexion réussie', `Bienvenue ${email}`);
      router.navigate('./Form'); // Naviguer vers l'écran 'Form'
    } else {
      Alert.alert('Erreur', 'Veuillez entrer un email et un mot de passe.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        placeholderTextColor="#ccc"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signup}>
        <Text style={styles.signupText}>Créer un compte</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#7752FE', 
    padding: 20,  
  },
  title: {
    fontSize: 32,  
    color: '#fff',  
    fontWeight: 'bold',  
    marginBottom: 30,  
  },
  input: {
    width: '100%',  
    height: 50,  
    backgroundColor: '#fff',  
    borderRadius: 10,  
    paddingHorizontal: 15,  
    fontSize: 16,  
    marginBottom: 20,  
    shadowColor: '#000',  
    shadowOffset: { width: 0, height: 2 },  
    shadowOpacity: 0.2,  
    shadowRadius: 5,  
    elevation: 5,  
  },
  button: {
    width: '100%',  
    height: 50,  
    backgroundColor: '#4CAF50',  
    borderRadius: 10,  
    justifyContent: 'center',  
    alignItems: 'center',  
    marginTop: 10,  
    shadowColor: '#000',  
    shadowOffset: { width: 0, height: 2 },  
    shadowOpacity: 0.2,  
    shadowRadius: 5,  
    elevation: 5,  
  },
  buttonText: {
    color: '#fff',  
    fontSize: 18,  
    fontWeight: 'bold',  
  },
  signup: {
    marginTop: 20,  
  },
  signupText: {
    color: '#fff',  
    fontSize: 16,  
    textDecorationLine: 'underline',  
  },
});

export default Login2;