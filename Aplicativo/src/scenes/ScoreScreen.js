import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import styles from '../styles/styles';

function ScoreScreen() {
  const [scoreData, setScoreData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/scores')
      .then((res) => res.json())
      .then((result) => {
        setScoreData(result.sort((a,b)=>{
          return b.score - a.score
        }));
        setLoading(false);
      })
      .catch((err) => {
        console.log('error: ', err);
      });
  }, []);

  return (
      <View style={styles.container}>
      <View style={styles.containerScore}>
        {loading ? (
          <Text style={styles.textScoreView}>'Loading...'</Text>
        ) : (
          <FlatList
            data={scoreData}
            renderItem={({ item }) => {
                return (<View style={styles.scoreViewDisplay}>
                  <Text style={styles.textScoreView} >Nome: {item.nome}</Text>
                  <Text style={styles.textScoreView}>Score: {item.score}</Text>
                  </View>
                  )
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
   </View>
  );
}

export default ScoreScreen;
