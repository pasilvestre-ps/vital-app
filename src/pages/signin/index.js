    import React, { useState } from 'react';

    import {
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    AppRegistry,
    } from 'react-native';

    import AsyncStorage from '@react-native-async-storage/async-storage';

    import firebase from '../../services/firebaseConnection';

    const bemVindoImage = require('../../assets/bem-vindo.png');
    const google = require('../../assets/google.png');
    const facebook = require('../../assets/facebook.png');
    const apple = require('../../assets/apple.png');


      const SignIn = () => {
        const [type, setType] = useState('login');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
      
      function handleLogin(){
        alert('Teste')
      }

        return (
        <View style={styles.container}>
          {/*<StatusBar style="auto" />*/}
          <Image style={styles.bemvindo} source={bemVindoImage}/>

              <View style={styles.emailContainer}>
                <Text style={styles.email}>E-mail</Text>
              </View>

              <TextInput 
                style={styles.input} 
                placeholder="Seu e-mail"
                value={email}
                onChangeText={ (text) => setEmail(text) }
              />

              <View style={styles.senhaContainer}>
                <Text style={styles.email}>Senha</Text>  
              </View>

              <TextInput 
                style={styles.input} 
                placeholder="*********" 
                value={password}
                onChangeText={ (text) => setPassword(text) }
                secureTextEntry={true}
              />                
              
              <View style={styles.forgot}>  
                <TouchableOpacity>
                <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                </TouchableOpacity>
              </View>  

          <TouchableOpacity 
            style={[styles.button, {backgroundColor: type === 'login' ? '#535CE8': '#171A1F'}]}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>
              {type === 'login' ? 'Entrar' : 'Cadastrar'}
            </Text>
          </TouchableOpacity> 

          
          <Text style={styles.or}>OU ENTRAR COM</Text>

          <View style={styles.socialContainer}>
            <Image style={styles.google} source={google}/>
            <Image style={styles.facebook} source={facebook}/>
            <Image style={styles.apple} source={apple}/>
          </View>
          
          <TouchableOpacity onPress={ () => setType(type => type === 'login' ? 'cadastrar' : 'login')}>
            <Text style={styles.signup}>
              {type === 'login' ? 'Não tem uma conta? Cadastre-se' : 'Já possuo uma conta'}          
            </Text>   
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
          marginTop: 80,    
            
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
          marginBottom: 30,
          color: '#6E7787'
          
        },
        signup: {
          fontFamily: 'Arial',
          fontSize: 18,
          fontWeight: '600',
          color: '#171A1F',
          
        },
        cadastre: {
          fontFamily: 'Arial',
          fontSize: 18,
          fontWeight: '600',
          color: '#535CE8',
          
        },
        socialContainer: {
          flexDirection: 'row',      
          marginBottom: 150,
          justifyContent: 'center',
          alignItems: 'center',
        },
        socialIcon: {
          marginHorizontal: 10, 
          width: 50, 
          height: 50,      
        },

        
      });

      export default SignIn;
      