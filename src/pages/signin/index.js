import React from 'react';
import {
 View, 
 Text,
 StyleSheet,
 TouchableOpacity,
 Image,
 TextInput,
} from 'react-native';

const bemVindoImage = require('../../assets/bem-vindo.png');


export default function SignIn() {
    return (
        <View style={styles.container}>
      {/*<StatusBar style="auto" />*/}
      <Image style={styles.bemvindo} source={bemVindoImage}/>
          <View style={styles.emailContainer}>
            <Text style={styles.email}>E-mail</Text>
          </View>    
        <TextInput style={styles.input} placeholder="E-mail"/>
          <View style={styles.senhaContainer}>
            <Text style={styles.email}>Senha</Text>  
          </View>
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}/>                
          <View style={styles.forgot}>  
            <TouchableOpacity>
            <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>  
      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>     
      <Text style={styles.or}>OU ENTRAR COM</Text>
      <TouchableOpacity>
      <Text style={styles.signup}>Não tem uma conta? Cadastre-se</Text>  
      </TouchableOpacity>            
    </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    bemvindo:{
      height: 30,
      width: 206,
    
    },
    emailContainer: {
      width: '80%',
      alignItems: 'flex-start',
      marginTop: 90,    
         
    },
    email: {
      fontFamily: 'Arial',
      fontSize: 18,
      fontWeight: '800',
      marginBottom: -16,
           
    },
    senhaContainer: {
      width: '80%',
      alignItems: 'flex-start',
      marginTop: 20           
         
    },
    input: {
      fontFamily: 'Arial',
      fontSize: 18,
      fontWeight: '400',
      marginTop: 20,
      borderWidth: 1,
      borderColor: '#F3F4F6',
      padding: 12,
      width: '80%',
      borderRadius: 15,
      backgroundColor: '#F3F4F6'   
      
    },
    forgot: {
      width: '80%',
      alignItems: 'flex-end',    
      
    },
    forgotPassword: {
      fontFamily: 'Arial',
      fontSize: 16,
      fontWeight: '400',
      marginTop: 20,
      marginBottom: 20,
      color: '#535CE8',    
      
    },
    button: {
      backgroundColor: '#535CE8',
      borderRadius: 30,
      padding: 20,
      width: '80%',
      alignItems: 'center',
      marginTop: 10,
    
    },
    buttonText: {
      fontFamily: 'Arial',
      fontSize: 20,
      fontWeight: '400',
      color: '#fff',
    },
    or: {
      fontFamily: 'Arial',
      fontSize: 16,
      fontWeight: '600',
      marginTop: 45,
      marginBottom: 150,
      color: '#6E7787'
      
    },
    signup: {
      fontFamily: 'Arial',
      fontSize: 18,
      fontWeight: '600',
      color: '#171A1F',
      
    }
    
  });
  