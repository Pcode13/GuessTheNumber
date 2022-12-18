import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import StartGame from './src/Screens/StartGame';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './src/Screens/GameScreen';
import GameOver from './src/Screens/GameOver';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'


export default function App() {
  const [Numbers ,setNumbers]=useState('')
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

 const [fontLoaded] =useFonts({

    'open-sans-bold':require('./src/Utils/Fonts/OpenSans-Bold.ttf'),
    'open-sans':require('./src/Utils/Fonts/OpenSans-Regular.ttf')
  });

if(!fontLoaded){
  return <AppLoading/>
}

  function PickedNumberHandler(PdemoNumber){
    setNumbers(PdemoNumber)
    setGameIsOver(false);
  }
  function gameOverHandler(NumberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(NumberOfRounds)
  }
 

   function OnStartGameHandler(){
    
    setNumbers(null);
      setGuessRounds(0);
    
   }
  
  let screen = <StartGame  PickedNumbers={PickedNumberHandler} />;

if(Numbers){
  screen = <GameScreen userNumber={Numbers} onGameOver={gameOverHandler}/>;
}

if (gameIsOver && Numbers) {
  screen = <GameOver userNaumber={Numbers} roundsNumber={guessRounds} OnStartNewGame={OnStartGameHandler}/>;
}

  return(
    <LinearGradient 
    style={styles.Container}
    colors={['#e7f099','#a3e3a1','#88e3db']}>
 
{screen}

    </LinearGradient>
  )

   
    
  
}

const styles = StyleSheet.create({
  Container:{
    flex:1
  }
});
