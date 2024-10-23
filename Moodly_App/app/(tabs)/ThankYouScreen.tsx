import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ThankYouScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo_bewell.png')}
        style={styles.image}
      />
      <Text style={styles.thankYouText}>Merci de votre réponse !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b197fc', // Couleur de fond en dégradé violet
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  thankYouText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default ThankYouScreen;