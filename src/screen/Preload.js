import React from 'react';
import { View,Text } from 'react-native';
import {StackActions, NavigationActions } from 'react-navigation';
import {connect } from 'react-redux';

const Preload = (props) => {
  if(!props.token){
    //login
    props.navigation.dispatch(StackActions.reset({
       index:0,
       actions: [
         NavigationActions.navigate({routeName:'Login'})
       ]
    }));
  }else{
    props.navigation.dispatch(StackActions.reset({
      index:0,
      actions: [
        NavigationActions.navigate({routeName:'HomeStack'})
      ]
   }));
  }
  return null;
}
const mapTateToProps = (state) =>{
  return{
     token: state.userReducer.token
  }
}
export default conect(mapTateToProps)(Preload);