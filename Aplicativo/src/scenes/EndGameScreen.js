import React, { useRef, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from '../styles/styles';
import { Audio } from 'expo-av';

/*
    ============Alunos==================
    Patrick delfim borges - 0050016717
    Thays dos Santos Barroso Ribeiro - 0050006852
*/

function EndGameScreen(props) {
  const pontuacao = parseInt(props.route.params.score);
  const mensagem =
    pontuacao > 0
      ? 'A sua pontuacao foi positiva!\n parabens pelo resultado'
      : 'A sua pontuacao foi negativa :(\n Continue tentando';
  const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/final-clapping.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    playSound();
  }, []);

  const [text, onChangeText] = useState('');

  function saveScoreToDatabase() {
    if (text.length > 0) {

        const objToSend = { nome: text, score: pontuacao }
        console.log(objToSend)
      fetch('http://127.0.0.1:3000/scores', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(objToSend),
      })
        .then((res) => console.log(res))
        .catch((err) => console.log('Error: ', err));
      return;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Jogo terminou</Text>
      <Text style={styles.endGameTextBase}>Sua pontuacao foi: {pontuacao}</Text>
      <Text style={styles.endGameTextBase}>{mensagem}</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder='digite seu nome'
        value={text}
      />

      <TouchableOpacity
        style={styles.Button}
        onPress={() => {
          saveScoreToDatabase();
          props.navigation.navigate('Home', { score: pontuacao });
        }}
      >
        <Text style={styles.btnText}>Voltar para tela inicial</Text>
      </TouchableOpacity>
    </View>
  );
}

export default EndGameScreen;
