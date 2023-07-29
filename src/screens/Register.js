import React from 'react';
import {View,Text,Image,StyleSheet, TextInput,TouchableOpacity} from 'react-native';


const Register =()=>{
  

  return (
    <>
     
    <View style={styles.logoContainer}>
        <Image style={styles.tinyLogo}  source={require('../../assets/images/pngegg.png')} />
    </View>
    <View style={styles.welcomingTextContainer}>
      <Text style={{fontSize:15,color:'black'}}>Merhaba Hoşgeldiniz.</Text>
      <Text style={{fontSize:12,marginTop:7,}}>Hesabınıza giriş yapın ya da kayıt olun.</Text>
    </View>
    <View style={styles.inputArea}>
          <TextInput style={[styles.inputs,{marginBottom:20}]} value='Adınız Soyadınız'></TextInput>
          <TextInput style={styles.inputs} value='Telefon Numaranız'></TextInput>
    </View>
    <View style={styles.submitContainer}>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={{fontWeight:'bold',color:'white'}}>Devam Et</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.nonRegisterContainer}>
        <TouchableOpacity style={styles.nonRegisterButton}>
          <Text style={{fontWeight:'bold',color:'black'}}>Giriş Yapmadan Devam Et</Text>
        </TouchableOpacity>
    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent:'center',
    alignItems:'center',
    marginTop:40,
  },
  tinyLogo: {
    width:330,
    height:100,
  },
  welcomingTextContainer: {
    width:330,
    height:100,
    marginTop:30,
    marginLeft:20,
  },
  inputArea:{
    
  },
  inputs:{
    borderWidth:1,
    marginHorizontal:18,
    borderRadius:10,
    borderColor:'#D3D3D3'
  },
  submitContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:23,
  },
  submitButton:{
      backgroundColor:'green',
      justifyContent:'center',
      alignItems:'center',
      width:350,
      height:42,
      borderRadius:10,
  },
  nonRegisterContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:200,
  },
  nonRegisterButton:{
      width:350,
      height:42,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#D3D3D3',
      borderRadius:10,

  }

});

export default Register;
