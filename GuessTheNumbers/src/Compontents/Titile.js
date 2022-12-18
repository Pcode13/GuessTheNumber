import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

function Titile({Titile}){
  return  <Text style={styles.titleTxt}>{Titile}</Text>
   
  
}

export default Titile

const styles = StyleSheet.create({
    titleTxt:{
      fontFamily:'open-sans',
    fontSize: 24,
    // fontWeight: 'bold',
    color: Colors.blue,
    textAlign: 'center',
    borderWidth: 4,
    borderColor: '#e61599',
    padding: 12,
    marginTop:40,
    marginHorizontal:20
    }
})