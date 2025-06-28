/* Zona 1: Importaciones */
import { StyleSheet, View, Text, Image, ImageBackground, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  return (
   <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} horizontal={true}>
    <Text>Hola mundo </Text>
     <Text>Hola mundo </Text>
      <Text>Hola mundo </Text>
       <Text>Hola mundo </Text>
        <Text>Hola mundo </Text>
          <Text>Hola mundo </Text>
     <Text>Hola mundo </Text>
      <Text>Hola mundo </Text>
       <Text>Hola mundo </Text>
        <Text>Hola mundo </Text>
          <Text>Hola mundo </Text>
     <Text>Hola mundo </Text>
      <Text>Hola mundo </Text>
       <Text>Hola mundo </Text>
        <Text>Hola mundo </Text>
          <Text>Hola mundo </Text>
     <Text>Hola mundo </Text>
      <Text>Hola mundo </Text>
       <Text>Hola mundo </Text>
        <Text>Hola mundo </Text>
          <Text>Hola mundo </Text>
     <Text>Hola mundo </Text>
      <Text>Hola mundo </Text>
       <Text>Hola mundo </Text>
        <Text>Hola mundo </Text>
          <Text>Hola mundo </Text>
     <Text>Hola mundo </Text>
      <Text>Hola mundo </Text>
       <Text>Hola mundo </Text>
        <Text>Hola mundo </Text>
          <Text>Hola mundo </Text>
      <Text>Hola mundo </Text>
       <Text>Hola mundo </Text>
        <Text>Hola mundo </Text>
          <Text>Hola mundo </Text>
     <Text>Hola mundo </Text>
      <Text>Hola mundo </Text>
       <Text>Hola mundo </Text>
        <Text>Hola mundo </Text>
   </ScrollView>
  );

}




// 4. Estilos simples
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.5)', // overlay semitransparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
  }
});