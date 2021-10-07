import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#f1faee',
        alignItems: 'center',
        justifyContent: 'center',
      },
      containerHome:{
        marginHorizontal:20,
        height: "100%",
        alignItems:"center",
        justifyContent: "flex-start",
        
    },
    textTitle:{
        paddingTop:20,
        fontSize: 40,
        fontWeight: "bold",
        color: "#1d3557"
    },
    textPontuacao:{
        paddingTop:20,
        fontSize: 24,
        fontWeight: "bold",
        color: "#1d3557"
    },
    textQuizHeader:{
        fontSize: 24,
        fontWeight: "bold",
        color: "#f1faee"
    },
    
    textBase:{
        fontSize: 16,
        textAlign: 'center',
        letterSpacing: 1.3,
        lineHeight:25,
        marginTop:40
    },
    endGameTextBase:{
        fontSize: 22,
        textAlign: 'center',
        letterSpacing: 1.3,
        marginTop:15
    },
    textScore:{
        fontSize: 23,
        textAlign: 'center',
        fontWeight: "bold",
        color: "#1d3557",
        marginTop:40
    },

    logoImage:{
        resizeMode: 'center',
        height:300,
    },
    Button:{
        zIndex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 60,
        paddingVertical: 16,
        paddingHorizontal: 72,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#457B9D',
    },
    btnText:{
        fontSize: 18,
        color: "#F1FAEE"
    },
    quizHeader:{
        height: 80,
        backgroundColor:"#1d3557",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
      },
      quizBody:{
        flex:1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },quizQuestion:{
        flex:1,
        width: "100%",
        backgroundColor:"#457B9D",
        justifyContent: "center",
        alignItems: "center"
        
    },quizQuestionTitle:{
        color: "#f1faee",
        fontSize: 22,
        fontWeight: "500",
        paddingHorizontal: 10
      },  
      quizAnswers:{
          flex:2,
          justifyContent: "space-evenly"
      },
      quizBtn:{
        zIndex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        minWidth: 350,
        paddingHorizontal: 20,
        borderRadius: 20,
        borderColor: "black",
        borderWidth: 2,
        elevation: 3,
    },
    quizBtnText:{
        textAlign: "center",
        fontSize: 18
    },
    respCerta:{
        zIndex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        minWidth: 350,
        borderRadius: 20,
        borderColor: "green",
        backgroundColor: "green",
        borderWidth: 2,
        elevation: 3,
    },
    respErrada:{
        zIndex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        minWidth: 350,
        borderRadius: 20,
        borderColor: "red",
        backgroundColor: "red",
        borderWidth: 2,
        elevation: 3,
    },
  });


  export default styles