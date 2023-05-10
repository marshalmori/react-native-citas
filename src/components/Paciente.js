import React from 'react';
import {Text, View} from 'react-native';

const Paciente = ({item}) => {
  const {paciente, fecha} = item;

  const formatearFecha = fechaCita => {
    const nuevaFecha = new Date(fechaCita);
    const opciones = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    return nuevaFecha.toLocaleDateString('es-ES', opciones);
  };

  return (
    <View>
      <Text>{paciente}</Text>
      <Text>{formatearFecha(fecha)}</Text>
    </View>
  );
};

export default Paciente;
