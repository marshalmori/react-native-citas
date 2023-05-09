import React from 'react';
import {Text, Modal, Button, SafeAreaView} from 'react-native';

const Formulario = ({modalVisible}) => {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView></SafeAreaView>
    </Modal>
  );
};

export default Formulario;
