import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

function GuessItems({GuessItems,guess}){
  return (
    <View style={styles.Container}>
      <Text>#{GuessItems}</Text>
      <Text>Opponent's Guess : {guess}</Text>
    </View>
  )
}

export default GuessItems

const styles = StyleSheet.create({
    Container:{
        borderColor:Colors.blue,
        borderWidth:1,
        borderRadius:10,
        padding:12,
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5
    }
})