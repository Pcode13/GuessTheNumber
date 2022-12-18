import { StyleSheet, Text, View,Alert ,FlatList} from 'react-native'
import React, { useState ,useEffect} from 'react'
import Titile from '../Compontents/Titile'
import NumberContainer from '../Compontents/NumberContainer';
import Colors from '../Utils/Colors';
import CustomButton from '../Compontents/CustomButton';
import { Ionicons } from '@expo/vector-icons';
import GuessItems from '../Compontents/GuessItems';


function genratedRandomNumber(min, max, exclude){
    const RandomNumber = Math.floor(Math.random() * (max-min)) +min;

    if(RandomNumber === exclude){

        return genratedRandomNumber(1, 100, exclude);
    } else {
      return RandomNumber;
    }
    }

    let minBoundary = 1;
    let maxBoundary = 100;



export default function GameScreen({userNumber,onGameOver}) {






    const initalValue =genratedRandomNumber( minBoundary,
        maxBoundary,
        userNumber) 
    const [currentnumber,setcurrentnumber]=useState(initalValue);

    const [guessRounds, setGuessRounds] = useState([initalValue]);

    useEffect(() => {
      if (currentnumber === userNumber) {
        onGameOver(guessRounds.length);
      }
    }, [currentnumber, userNumber, onGameOver]);



    useEffect(() => {
      minBoundary = 1;
      maxBoundary = 100;
    }, []);

    function RandomNumberHandler(direction){

        if (
            (direction === 'lower' && currentnumber < userNumber) ||
            (direction === 'greater' && currentnumber > userNumber)
          ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
              { text: 'Sorry!', style: 'cancel' },
            ]);
            return;
          }
      
          if (direction === 'lower') {
            maxBoundary = currentnumber;
          } else {
            minBoundary = currentnumber + 1;
          }
      
          const newRndNumber = genratedRandomNumber(
            minBoundary,
            maxBoundary,
            currentnumber
          );
          setcurrentnumber(newRndNumber);
          setGuessRounds(e => [newRndNumber,...e])
        
    }
    
    



    const guessRoundsListLength = guessRounds.length;


  return (
    <View style={styles.inputContainer}>
   <Titile Titile={'Opponents Guess'} />
   <NumberContainer setNumbers={currentnumber}/>
   <View style={styles.buttonContainer} >
   <View style={styles.buttonView}>
   <CustomButton title={'-'} onPress={RandomNumberHandler.bind(this, 'lower')} customStyle={styles.demo}  />
 
    
   </View>
   
   <View style={styles.buttonView} >
   <CustomButton title={'+'} onPress={RandomNumberHandler.bind(this, 'greater')} customStyle={styles.demo} /> 
   </View>
   
   </View>
  <View>
    {/* {guessRounds.map(t => <Text key={guessRounds}>{guessRounds}</Text>)} */}

    <FlatList
      data={guessRounds}
      renderItem={(itemdata)=>(
        <GuessItems
        GuessItems={guessRoundsListLength - itemdata.index}
              guess={itemdata.item}
        />
      )
       
      }
      keyExtractor={(item)=>item}
    />
  </View>

    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        padding:20,

    },
    buttonContainer:{
        flexDirection:'row',
        marginTop:16,
        alignItems:'center'
    },
    buttonView:{
        flex:1
    },
    demo:{
      borderWidth:3,
      width:100,
      height:40
    }
   
})