import React from 'react'
import { StyleSheet, View } from 'react-native'
import Quiz from './components/Quiz'

class App extends React.Component {
  render () {
    return (
      <View style={styles.gen}>
        <Quiz />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  gen: {
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})

export default App
