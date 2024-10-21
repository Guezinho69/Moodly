import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const MoodSelection = () => {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [showTextInput, setShowTextInput] = useState(false);
  const [details, setDetails] = useState('');

  // Liste d'émojis avec leur nom
  const emojis = [
    { emoji: '😀', label: 'Heureux' },
    { emoji: '😐', label: 'Neutre' },
    { emoji: '😔', label: 'Triste' },
    { emoji: '😡', label: 'En colère' },
    { emoji: '😅', label: 'Stressé' }
  ];

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    setShowTextInput(true); // Afficher le champ de texte si un émoji est cliqué
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comment vous sentez-vous aujourd'hui ?</Text>
      <View style={styles.emojiContainer}>
        {emojis.map((item) => (
          <TouchableOpacity key={item.emoji} onPress={() => handleEmojiClick(item.emoji)} style={styles.emojiButton}>
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {showTextInput && (
        <TextInput
          style={styles.textInput}
          placeholder="Voulez-vous donner plus de détails ?"
          value={details}
          onChangeText={setDetails}
        />
      )}

      {selectedEmoji && (
        <Text style={styles.selectedText}>
          Vous avez sélectionné : {selectedEmoji} {details ? `- Détails : ${details}` : ''}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  emojiButton: {
    alignItems: 'center',
    padding: 10,
  },
  emoji: {
    fontSize: 30,
  },
  label: {
    fontSize: 16,
    marginTop: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  selectedText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default MoodSelection;
