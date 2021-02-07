import React from 'react';
import {
  View,
  StyleSheet,Text
} from 'react-native';

const Settings = () =>  {
  return (
    <View style={styles.screen}>
      <Text>Página Settings</Text>
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
export default Settings;
