import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
function NumberContainer({setNumbers}){
  return (
    <View style={styles.Container}>
      <Text style={styles.textView}>{setNumbers}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    Container:{
        height:150,
        borderWidth: 5,
        borderColor: Colors.orange,
        padding: 12,
        marginTop:40,
        marginHorizontal:20,
        justifyContent:'center',
        borderRadius:20
    },
    textView:{
        fontSize: 60,
        fontWeight: 'bold',
        color: Colors.blue,
        textAlign: 'center',
    }

})