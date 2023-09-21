




// import React from 'react';
import { View, StyleSheet } from 'react-native';
// import CryptoPriceTracker from './CryptoPriceTracker';
import AssetExample from './components/AssetExample'
const App = () => {
  return (
    <View style={styles.container}>
      <AssetExample/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
