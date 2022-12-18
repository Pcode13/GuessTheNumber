import { Pressable, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

 

function CustomButton({title,onPress, Icon,customStyle}) {

    function pressHandler(){
        console.log("Hello")
    }
  return (
    <View style={[styles.inputContainer,customStyle]}>
    <Pressable android_ripple={{color:'#9ee8d2'}} style={({pressed})=> pressed && styles.pressedItem} onPress={onPress}>

      <Text style={styles.Txt}>{title}</Text>
      </Pressable>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    inputContainer:{
       
    width:100,
    height:30,
        backgroundColor:'#37c49a',
        marginVertical:10,
        borderRadius:10,
        alignSelf:'center',
        elevation: 2,
    },
    Txt:{
        textAlign:'center',
        padding:5,
        fontSize:15,
        fontWeight:'500'
    },
    pressedItem :{
        opacity:0.3
    }
})