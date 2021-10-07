import React, {useRef, useEffect, useState} from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import { Audio } from 'expo-av';


/*
    ============Alunos==================
    Patrick delfim borges - 0050016717
    Thays dos Santos Barroso Ribeiro - 0050006852
*/


function EndGameScreen(props){

    const pontuacao = parseInt(props.route.params.score)
    const mensagem = pontuacao > 0 ? 
    "A sua pontuacao foi positiva!\n parabens pelo resultado" :
     "A sua pontuacao foi negativa :(\n Continue tentando"
    const [sound, setSound] = useState();

     async function playSound() {
       console.log('Loading Sound');
       const { sound } = await Audio.Sound.createAsync(
          require('../assets/final-clapping.mp3')
       );
       setSound(sound);
   
       console.log('Playing Sound');
       await sound.playAsync(); }
   
     useEffect(() => {
       return sound
         ? () => {
             console.log('Unloading Sound');
             sound.unloadAsync(); }
         : undefined;
     }, [sound]);
   
     useEffect(()=>{
        playSound()
     },[])


    return(
    <View style={styles.container}>
        <Text style={styles.textTitle}>Jogo terminou</Text>
        <Text style={styles.endGameTextBase}>Sua pontuacao foi: {pontuacao}</Text>
        <Text style={styles.endGameTextBase}>{mensagem}</Text>
        
        <TouchableOpacity  style={styles.Button} 
                 onPress={()=>  props.navigation.navigate("Home", {score:pontuacao})}>
                     <Text style={styles.btnText}>
                         Voltar para tela inicial
                     </Text>
                 </TouchableOpacity>
    </View>
    )
}



export default EndGameScreen