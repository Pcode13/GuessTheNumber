import {View ,TextInput,Text,StyleSheet, Alert} from 'react-native'
import React, { useState } from 'react';
import CustomButton from '../Compontents/CustomButton';
import Colors from '../Utils/Colors'
import Titile from '../Compontents/Titile';

function StartGame({PickedNumbers}){
const [enteredNumber,setEnterd]= useState('')

function ChangeText(enterTxt){
    setEnterd(enterTxt)
}
function resetedButton(){
setEnterd('')
}

function confirmedButton(){
    const Numbers =parseInt(enteredNumber)

    if(isNaN(Numbers) || Numbers <=0 || Numbers > 99){
        Alert.alert(
            'Invalid number !!',
            'number has to be a number between 1 and 99',
            [{text:'Okay', style:'destructive',onPress:resetedButton}]
        )
        return;
    }
    PickedNumbers(Numbers);
}

return(
    <View style={{marginTop:40,flex:1}}>
    <Titile Titile={'Guess The Number Game'}/>
    <View style={styles.inputContainer}>
<Text style={styles.txt}>Enter The Number</Text>
 <TextInput  
 style={styles.Numberinput} 
 maxLength={2}
     keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={ ChangeText}
        value={enteredNumber}
 />
 <View style={styles.buttonContainer}>
 <View style={styles.buttonView}>
 <CustomButton title={'Reset'} onPress={resetedButton} />
 </View>
 <View style={styles.buttonView}>
 <CustomButton title={'Confirm'}  onPress={confirmedButton}/>
 </View>


 </View>

    </View>
    </View>
)
}

export default StartGame;

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent:'center',
        alignContent:'center',
        padding:16,
        marginTop:100,
        backgroundColor:'#f54272',
        marginHorizontal:24,
        borderRadius:20,
        elevation:10,
        shadowColor:'blue',
        shadowOffset:{
            width:2,
            height:2
        },
        shadowRadius:10,
        shadowOpacity:10
    },
    Numberinput:{
        alignSelf:'center',
        height:50,
        fontSize:16,
        width:100,
        borderBottomColor:'#f5f242',
        borderBottomWidth:3,
        color:Colors.yellow,
        fontSize:30,
        fontWeight:'500',
        textAlign:'center',
        paddingBottom:5
    },
    buttonContainer:{
        flexDirection:'row'
    },
    buttonView:{
        flex:1
    },
    txt:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        fontWeight:'700',
       
    }
});