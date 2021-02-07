import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

const SignIn = () => {
  return (
      <View styles={styles.screen}>
          <Text>Tela de Login</Text>
      </View>
    );
}
export default SignIn; 

const styles = StyleSheet.create({
  screen:{ 
     flex:1,
     alignItems:"center",
     justifyContent: "center",
     backgroundColor:"#FBB000"
  }
});