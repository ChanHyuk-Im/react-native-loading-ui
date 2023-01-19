/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <SkeletonPlaceholder backgroundColor={'orange'}>
          <View style={{ alignItems: 'center' }}>
            <View style={{ width: 50, height: 50 }} />
            <View style={{ width: 120, height: 40, marginTop: 10 }} />
          </View>
        </SkeletonPlaceholder>
      </View>
      <ActivityIndicator size="small" color="orange" />
      <ActivityIndicator size="large" color="#0055AA" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
