import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import mango from "./assets/download.png";
export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={ styles.ScrollView}>
        <Image source={mango} style={styles.Image}></Image>
        <Image source={mango} style={styles.Image}></Image>
        <Image source={mango} style={styles.Image}></Image>
      </ScrollView>

      <Text>Open up App.js to start working on your app!</Text>
      <Button title="press me!" />
      {/*<StatusBar style="auto" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  scroll:{
    justifyContent: "space-evenly"
  },
  Image: {
    alignItems: 'flex-start',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
