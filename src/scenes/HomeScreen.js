import React from 'react';
import { Text, View ,Image, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';

/*
    ============Alunos==================
    Patrick delfim borges - 0050016717
    Thays dos Santos Barroso Ribeiro - 0050006852
*/


function HomeScreen(props){
    
    const ultimaPontuacao = props?.route?.params?.score === undefined ? 0 : props.route.params.score

    return(
        <View style={styles.container}>
            <View style={styles.containerHome}>
            <Text style={styles.textTitle}>Quiz programação</Text>
            <Image source={require('../assets/QuizLogosvg.png')} style={styles.logoImage} />
            <Text style={styles.textBase}>Quiz programação eh um jogo para voce treinar suas habilidades
             na area de TI. Para jogar basta clicar no botão começar e responder as perguntas de múltipla 
             escolha. No final de 2 minutos o jogo termina sozinho e informa sua pontuação final. 
             Boa sorte!!</Text>
                 <Text style={styles.textScore}> Ultima pontuacao: {ultimaPontuacao} </Text>
                 <TouchableOpacity  style={styles.Button} 
                 onPress={()=>  props.navigation.navigate("StartQuiz")}>
                     <Text style={styles.btnText}>
                         Começar
                     </Text>
                 </TouchableOpacity>
                 </View>
        </View>
    )
}




export default HomeScreen