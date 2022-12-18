import {Text,View,Image,StyleSheet} from 'react-native'
import React from 'react'
import Titile from '../Compontents/Titile'
import CustomButton from '../Compontents/CustomButton'
import Colors from '../Utils/Colors'
function GameOver({userNaumber,roundsNumber,OnStartNewGame}){

  return (
    <View style={styles.inputContainer}>
      <Image source={require('../Images/gameover.png')} style={styles.imgView}/>

      <Text style={styles.summury}>
        Your Phone needed <Text style={styles.hightlight}>{roundsNumber}</Text>  rounds to guess the number <Text style={styles.hightlight}>{userNaumber}</Text>
      </Text>

      <View style={{alignItems:'center',justifyContent:'center', color:Colors.orange,}}>
        <CustomButton title={'Shart New Game'} customStyle={styles.customStyle} onPress={OnStartNewGame}/>
      </View>
    </View>
  )
   
}

export default GameOver

const styles = StyleSheet.create({


  inputContainer:{
    flex:1,
    padding:20,
    justifyContent:'center',
    alignItems:'center'
},
imgView:{
  
},
summury:{
  fontFamily:'open-sans',
  fontSize:16,
textAlign:'center',
letterSpacing:2,
lineHeight:50
},
hightlight:{
  fontFamily:'open-sans-bold',
  
},
customStyle:{
  width:300,
  
 
  textAlign:'center'
}

})





