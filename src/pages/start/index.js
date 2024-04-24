import React from 'react';

import { 
    View, 
    Text,
    StyleSheet,
    Image,    
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const womanStartImage = require('../../assets/woman-start.png');
const logoImage = require('../../assets/logo.png');


export default function Start() { 
    const navigation = useNavigation();

    setTimeout(() => {
        navigation.navigate('SignIn');
    }, 2000);
    
    
    return (
        <View style={styles.container}>            
            
          <View style={styles.containerWoman}>
            <Image            
            source={require('../../assets/woman-start.png')}
            style={{width: '100%'}}
            resizeMode="contain"
            />
                         
          </View>

          <View style={styles.containerLogo}>
            <Image            
            source={require('../../assets/logo.png')}
            style={{width: '20%'}}
            resizeMode="contain"
            />
                         
          </View> 

          <Animatable.View animation= 'fadeInUp' style={styles.containerFrase}>            
            <Text style={styles.text}>Vamos começar</Text>       
            <Text style={styles.text}>nossa jornada de</Text>
            <Text style={styles.text}>hábitos saudáveis!</Text>
          </Animatable.View>       
          
             
          
        </View>
        
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#535CE8',
    },
    containerWoman:{
        flex:1,
        backgroundColor: '#535CE8',
        justifyContent: "space-around",
        alignItems:"flex-start",
        marginTop: 180,        
        marginBottom: 170,
    },
    containerLogo:{
        flex:1,        
        justifyContent: "space-evenly",
        alignItems:"center",
        paddingStart:'5%',
        marginTop:28,
        
    },
    containerFrase:{
        flex:1,
        backgroundColor: '#535CE8',
        alignItems: 'center',
        paddingStart:'5%',
        paddingEnd:'5%', 
        marginTop:28,
        marginBottom:150,       
        
        
    },
    text:{
        
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ffff',        
        marginBottom: 12,
        paddingStart:'5%',
        paddingEnd:'5%',
    }      
    
})