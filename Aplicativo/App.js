import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/scenes/HomeScreen'
import QuizScreen from './src/scenes/QuizScreen';
import EndGameScreen from './src/scenes/EndGameScreen';
import data from './src/assets/data.json';
import ScoreScreen from './src/scenes/ScoreScreen';

/*
    ============Alunos==================
    Patrick delfim borges - 0050016717
    Thays dos Santos Barroso Ribeiro - 0050006852
*/


const Stack = createNativeStackNavigator();
export default function App() {

  const jsonData = data.results.sort((a, b) => 0.5 - Math.random())
  


  return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
           <Stack.Screen name="Home" component={HomeScreen} /> 
          <Stack.Screen name="StartQuiz" component={QuizScreen} initialParams={{'data':jsonData}} />
          <Stack.Screen name="EndGame" component={EndGameScreen}  />
          <Stack.Screen name="scoreScreen" component={ScoreScreen}  options={{ headerShown: true ,title: 'Score List' }}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}


