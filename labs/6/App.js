import React from 'react'
import { StyleSheet, Text, Button } from 'react-native'
import questions from './components/questions.json'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      currentState: 0,
      currentQuestion: 0,
      score: 0
    }
  }

  render () {
    return (
      <Text style={styles.body}>I couldnt figure it out, but I am going to work on React Native over the summer</Text>
    )
  }
}

const styles = StyleSheet.create({

  body: {
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: '500',
    marginTop: '10',
    textDecorationLine: 'underline',
    textAlign: 'center'
  }

})
