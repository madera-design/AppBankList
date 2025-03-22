import React from 'react';
import { SafeAreaView, StatusBar, Platform, StyleSheet } from 'react-native';
import BankListScreen from './src/screens/BankListScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f4f8" />
      <BankListScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default App;