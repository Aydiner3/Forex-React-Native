import React from 'react';
import {View,Text,Image,StyleSheet, TextInput,TouchableOpacity} from 'react-native';


const Auth =()=>{
  

  return (
    <>
     
    <View style={styles.logoContainer}>
        <Image style={styles.tinyLogo}  source={require('../../assets/images/pngegg.png')} />
    </View>
    <View style={styles.welcomingTextContainer}>
      <Text style={{fontSize:15,color:'black'}}>Merhaba Hoşgeldiniz.</Text>
      <Text style={{fontSize:12,marginTop:7,}}>(+90)553 703 1X XX numaralı telefona bir kimlik doğrulama kodu gönderildi.</Text>
    </View>
    <View style={styles.inputArea}>
          <TextInput style={[styles.inputs,{borderColor:'green'}]} value=''></TextInput>
          <TextInput style={styles.inputs} value=''></TextInput>
          <TextInput style={styles.inputs} value=''></TextInput>
          <TextInput style={styles.inputs} value=''></TextInput>
          <TextInput style={styles.inputs} value=''></TextInput>
          <TextInput style={styles.inputs} value=''></TextInput>
    </View>
    <View style={{justifyContent:'center',alignItems:'center',marginTop:19}}>
      <Text style={{color:'black',fontWeight:'bold',fontSize:20,}}>2:48</Text>
      <Text style={{color:'blue',marginTop:7}}>Tekrar Gönder</Text>
    </View>
    <View style={styles.submitContainer}>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={{fontWeight:'bold',color:'white'}}>Kayıt Ol</Text>
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
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    marginHorizontal:15,

  },
  inputs:{
    borderWidth:1,
    borderRadius:10,
    borderColor:'#D3D3D3',
    width:50,
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

export default Auth;
