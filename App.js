import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';

export default function App() {
  function buttonPressed(){
    console.log("Submitted!");
  }
  return (
    <View style={styles.container}>

      <Button title="Submit" onPress={buttonPressed}></Button>
      
      
    </View>
  );
}

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});