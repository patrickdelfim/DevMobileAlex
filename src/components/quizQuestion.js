
import React ,{useEffect, useState} from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';

import QuizBtn from './QuizBtn';
import styles from '../styles/styles';

/*
    ============Alunos==================
    Patrick delfim borges - 0050016717
    Thays dos Santos Barroso Ribeiro - 0050006852
*/


function QuizQuestion(props){

    const [randomizedAnswer, setRandomizedAwnser] = useState([])
        
    useEffect(()=>{
        const todasRespostasJuntas = props.respostaErrada.concat([props.respostaCerta])
        const respostasOrdemAleatoria = todasRespostasJuntas.sort((a, b) => 0.5 - Math.random())
        setRandomizedAwnser(respostasOrdemAleatoria.filter(n => n))
        
    },[props.indexQuestion])

    return(

    <View style={styles.quizBody}>
        <View style={styles.quizQuestion}>
            <Text style={styles.quizQuestionTitle}>{props.pergunta}</Text>
        </View>
        <View style={styles.quizAnswers}>
            {randomizedAnswer.map((element,index)=>{

                    const respostaCerta = randomizedAnswer[index] === props.respostaCerta

                return <QuizBtn  key = {randomizedAnswer[index]} 
                                resposta = {randomizedAnswer[index]}
                                funcResponder = {props.funcResponder}
                                respostaCerta = {respostaCerta}
                                setGameScore={props.setGameScore}
                                GameScore={props.GameScore}/>
            })}
        </View>
    </View>
    )

}


export default QuizQuestion