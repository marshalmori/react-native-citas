import React from 'react';
import {Text, Modal} from 'react-native';

const Formulario = () => {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <Text>Desde Modal</Text>
    </Modal>
  );
};

export default Formulario;
