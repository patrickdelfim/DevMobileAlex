import React , {useEffect, useState} from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';

import QuizQuestion from '../components/quizQuestion';

/*
    ============Alunos==================
    Patrick delfim borges - 0050016717
    Thays dos Santos Barroso Ribeiro - 0050006852
*/


 function QuizScreen(props) {
    
    
    const [[mins, secs], setTime] = useState([parseInt(2), parseInt(0)])
    const [questions, setQuestions] = useState(props.route.params.data)
    const [ActualQuestionindex, setActualQuestionindex] = useState(0)
    const [GameScore, setGameScore] = useState(0)

    function questaoRespondida(){
        setActualQuestionindex(ActualQuestionindex+1)
    }

    function finishQuiz(){
        props.navigation.navigate('EndGame', {score:GameScore})
    }


    const tick = () => {
        
        if (mins === 0 && secs === 0) 
            finishQuiz()
        else if (secs === 0) {
            setTime([ mins - 1, 59]);
        } else {
            setTime([ mins, secs - 1]);
        }
    };
    
    useEffect(()=>{
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    })
    

    return (
    <View style={styles.container}>
        <View style={styles.quizHeader}>
         <Text style={styles.textQuizHeader}>{mins}:{secs}</Text>
         <Text style={styles.textQuizHeader}>Score: {GameScore}</Text>
        </View>
        <QuizQuestion pergunta={questions[ActualQuestionindex].question}
                      respostaCerta = {questions[ActualQuestionindex].correct_answer}
                      respostaErrada = {questions[ActualQuestionindex].incorrect_answers}
                      funcResponder = {questaoRespondida}
                      indexQuestion = {ActualQuestionindex}
                      setGameScore= {setGameScore}
                      GameScore={GameScore}/>
    </View>)           
    }




    export default QuizScreen