/* Zona 1: Importaciones */
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Switch, Alert } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  useEffect(() => {
    setTimeout(async () => {
      setAppReady(true);
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);

const handleRegistro = () => {
  if (!nombre.trim() || !correo.trim()) {
    Alert.alert(
      "Error",
      "Por favor completa todos los campos",
      [{ text: "OK" }]
    );
    return;
  }

  if (!aceptaTerminos) {
    Alert.alert(
      "Términos no aceptados",
      "Debes aceptar los términos y condiciones",
      [{ text: "OK" }]
    );
    return;
  }

  Alert.alert("¡Registro exitoso!", `Nombre: ${nombre}. Email: ${correo}`);
};

  return (
    <ImageBackground
      source={require('./assets/walls.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.formBox}>
          <Text style={styles.title}>Registro de Usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="#ccc"
            value={nombre}
            onChangeText={setNombre}
          />

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#ccc"
            keyboardType="email-address"
            value={correo}
            onChangeText={setCorreo}
          />

          <View style={styles.termsContainer}>
            <Switch
              value={aceptaTerminos}
              onValueChange={setAceptaTerminos}
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={aceptaTerminos ? "#007bff" : "#f4f3f4"}
            />
            <Text style={styles.termsText}>Aceptar términos y condiciones</Text>
          </View>

          <TouchableOpacity 
            style={[styles.button, !aceptaTerminos && styles.buttonDisabled]} 
            onPress={handleRegistro}
          >
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

/* Zona 3: Estilos */
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formBox: {
    width: '85%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15,
    color: '#fff',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  termsText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#555',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
