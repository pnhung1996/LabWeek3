import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , TextInput, SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style = {{textAlign : 'center', fontSize : 15}}>Please enter the value of the currency you want to convert</Text>
      <TextInput keyboardType = 'number-pad'
      selectionColor="red"
      style = {styles.textInputStyle} 
      autoFocus = {true}
      textAlign = "center"
      placeholder = "Type the number"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection : 'column',
    marginTop : 50
  },
  textInputStyle : {
    width : '85%',
    height : 60,
    borderColor : 'lightblue',
    borderWidth : 1,
    fontSize : 30,
    alignContent : 'center',
    justifyContent : 'center',
    padding : 10
  }
});
