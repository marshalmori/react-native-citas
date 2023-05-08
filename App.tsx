import React from 'react';
import {SafeAreaView, Text, StyleSheet, Button, Pressable} from 'react-native';

const App = () => {
  const nuevaCitaHandler = () => {
    console.log('Diste click...');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable onPress={nuevaCitaHandler}>
        <Text>Nueva Cita</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
  },
});

export default App;
