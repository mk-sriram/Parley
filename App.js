import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';




export default function App() {
  const BottomSheetModalRef = useRef(null);
  const snapPoints = ["48%"]; 

  function handlePresentModal () { 
    BottomSheetModalRef.current?.present(); 
  }
  return (
    <BottomSheetModalProvider>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Present Modal " onPress = { handlePresentModal} / >
      <StatusBar style="auto" />
      <BottomSheetModal
        ref={BottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        backgroundStyle={{ borderRadius: 50 }}
      >
      </BottomSheetModal>
    </View>

    </BottomSheetModalProvider>
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
