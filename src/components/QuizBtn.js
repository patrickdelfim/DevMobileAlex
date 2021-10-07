
import React ,{useEffect, useState,useRef} from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';


import styles from '../styles/styles';

/*
    ============Alunos==================
    Patrick delfim borges - 0050016717
    Thays dos Santos Barroso Ribeiro - 0050006852
*/

function QuizBtn(props){

   const didMountRef = useRef(false);
   const [pressionado,setPressionado] = useState(false)
  


    useEffect(()=>{
        console.log(pressionado)
        let timer1
        if (didMountRef.current){
        if(props.respostaCerta){
            props.setGameScore(props.GameScore+5)
        }else{
            props.setGameScore(props.GameScore-5)
        }

         timer1 = setTimeout(()=>{
            props.funcResponder()

        },1000)}else{
            setPressionado(false)
            didMountRef.current = true;
        }

        return ()=>{
            clearTimeout(timer1);
        }
    },[pressionado])


return (
<TouchableOpacity style={ 
    pressionado ? props.respostaCerta ? styles.respCerta : styles.respErrada : styles.quizBtn} onPress={()=> setPressionado(true)}>
    <Text style={styles.quizBtnText}>{props.resposta}</Text>
</TouchableOpacity>)


}


export default QuizBtn