import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native'


const App = () => {

  const [counter, setCounter] = useState(0);


  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <Text style={styles.counterText}>{counter}</Text>
      <View>
        <TouchableOpacity activeOpacity={.8} touchSoundDisabled={true} style={styles.btnContainer} onPress={() => setCounter(prevCount => prevCount + 1)}>
          <Text style={styles.btnText}>Increase Counter(+1)</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.8} touchSoundDisabled={true}  style={styles.btnContainer} onPress={() => setCounter(prevCount => prevCount - 1)}>
          <Text style={styles.btnText}>Deincrease Counter(-1)</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.8} touchSoundDisabled={true} style={styles.btnContainer} onPress={() => setCounter(prevCount => prevCount + 2)}>
          <Text style={styles.btnText}>Double Increase Counter(+2)</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={.8} touchSoundDisabled={true} style={styles.btnContainer} onPress={() => setCounter(0)}>
          <Text style={styles.btnText}>Reset the Counter</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#adc7ff"
  },
  counterText:{
    color:"#adc7ff",
    fontWeight:"bold",
    fontSize:50,
    letterSpacing:1,
    backgroundColor:"#fff",
    padding:10,
    borderRadius:4,
    marginBottom:50
  },
  btnContainer:{
    marginVertical:8,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center",
    maxWidth:330,
    padding:10,
    borderRadius:3
  },
  btnText:{
    color:"#adc7ff",
    fontSize:20,
    letterSpacing:1,
    fontWeight:"bold",
    fontFamily:"tahoma"
  }
});

export default App
