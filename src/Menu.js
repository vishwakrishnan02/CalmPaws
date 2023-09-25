// src/Menu.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Menu = () => {
  return (
    <View style={styles.menu}>
      <Text style={styles.title}>hiiiii Something</Text>
      <TouchableOpacity style={styles.playButton}>
        <Text style={styles.buttonText}>Play with Friends</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.playButton}>
        <Text style={styles.buttonText}>Play in a Random Lobby</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  playButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Menu;
