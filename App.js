import React from 'react';
import {
  View,
  StyleSheet,Text
} from 'react-native';

const App = () =>  {
  return (
    <View style={styles.screen}>
      <Text>Teste</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{ 
     flex:1,
     alignItems:"center",
     justifyContent: "center",
     backgroundColor:"#FBB000"
  }
});

export default App;
