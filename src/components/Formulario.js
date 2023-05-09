import React from 'react';
import {
  Text,
  Modal,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
} from 'react-native';

const Formulario = ({modalVisible}) => {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva {''} <Text style={styles.tituloBold}>Cita</Text>
          </Text>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Paciente"
              placeholderTextColor={'#666'}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Proprietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Proprietario"
              placeholderTextColor={'#666'}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Email Proprietário</Text>
            <TextInput
              style={styles.input}
              placeholder="Email Proprietario"
              placeholderTextColor={'#666'}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Teléfono Proprietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Teléfono Proprietario"
              placeholderTextColor={'#666'}
              keyboardType="number-pad"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#fff',
  },
  tituloBold: {
    fontWeight: '900',
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: '#fff',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
});

export default Formulario;
