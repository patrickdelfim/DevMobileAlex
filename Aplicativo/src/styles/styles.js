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
        marginHorizontal:10,
        height: "100%",
        alignItems:"center",
        justifyContent: "flex-start",
        
    },
    containerScore:{
        flex: 1,
        height: "100%",
        width:'100%',
        backgroundColor: '#f1faee',
        alignItems:"center",
        justifyContent: "flex-start",
    },
    scoreViewDisplay: {
        minWidth: "100%",
        borderBottomWidth:1,
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomColor: "black",
    },
    textScoreView:{
        fontWeight: "bold",
        color: "#1d3557",
        textAlign: 'center',
        fontSize: 23,
        margin:0,
        padding:1
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
        marginTop:20
    },

    logoImage:{
        resizeMode: 'center',
        height:300,
    },
    Button:{
        zIndex : 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:25,
        marginBottom: 0,
        paddingVertical: 16,
        paddingHorizontal:10,
        width:"auto",
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#457B9D',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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