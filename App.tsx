import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Kojima o que foi que você fez?!</Text>
      <Text style={styles.subtitulo}>Impressionante demais essa cena!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07edf5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    color: '#023a23',
    fontSize: 20,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#610404',
    fontSize: 15,
  }
});
