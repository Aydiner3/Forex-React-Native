import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import Register from './src/screens/Register'
import Auth from './src/screens/Auth';

function App(): JSX.Element {
  

  return (
    <>
      <Auth/>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    
  },

});

export default App;
