/* Zona 1: Importaciones */
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, ScrollView } from 'react-native';

/* Zona 2: Main */
export default function App() {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [comments, setComments] = useState('');
  const [age, setAge] = useState('');


  const showAlert = () => {
  if (nombre.trim() === '' || password.trim() === '' || age.trim() === '') {
    window.alert('Por favor, completa todos los campos requeridos.');
  } else {
    window.alert(
      `Nombre: ${nombre}\nContrasena: ${password}\nEdad: ${age}\nComentarios: ${comments}`
    );
  }

}

  return (
   <ScrollView contentContainerStyle={styles.container}>
    <Text styles={styles.input}>Nombre</Text>
    <TextInput
    style={styles.input}
    placeholder="Escribe tu nombre"
    value={nombre}
    onChangeText={setNombre}
    >
    </TextInput>
    
    <Text style= {styles.title}>Contrasena</Text>
    <TextInput
    style={styles.input}
    placeholder="Escribe tu contrasena"
    value={password}
    onChangeText={setPassword}
    secureTextEntry={true}>
    </TextInput>

    <Text style={styles.title}>Edad</Text>
    <TextInput
    style={styles.input}
    placeholder="Escribe tu edad"
    value={age}
    onChangeText={setAge}
    keyboardType="numeric"
    >
    </TextInput>

    <Text style={styles.title}>Comentarios Multilineal</Text>
    <TextInput
    style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
    placeholder="Escribe tus comentarios"
    value={comments}
    onChangeText={setComments}
    multiline={true}
    numberOfLines={4}
    >
    </TextInput>

    <Text style={styles.input}>Campo de solo lectura</Text>
    <TextInput
    style={styles.input}
    value="Este campo es de solo lectura"
    editable={false}
    >
    </TextInput>

    <Button title="Mostrar Alerta" onPress={showAlert}></Button> 
    

   </ScrollView>
  );
}

/* Estilos */
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 17,
    color: '#333',
    marginBottom: 6,
    alignSelf: 'flex-start',
  },
  input: {
    height: 44,
    borderColor: '#bbb',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '100%',
    fontSize: 15,
  },
});
