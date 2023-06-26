import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Settings from 'expo-settings';
import * as HelloModule from 'hello-module';

export default function App() {
  return (
    <View style={styles.container}>
			<Text>{Settings.hello()}</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
			<Text>From go mobile: {HelloModule.hello()}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
