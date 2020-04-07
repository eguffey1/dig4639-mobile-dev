import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import questions from './questions.json'

const HOME = 0
const QUIZ = 1

export default class Quiz extends React.Component {
  constructor () {
    super()
    this.state = {
      currentState: HOME,
      currentQuestion: 0,
      score: 0
    }
  }

  advance (ans) {
    if (ans.correct) {
      this.setState({ score: this.state.score + 1 })
    }
    this.setState({ currentQuestion: this.state.currentQuestion + 1 })
  }

  render () {
    return (
      <View>
        {(this.state.currentState === HOME)
          ? <View>
            <Text style={styles.title}>The Monty Python-ish Quiz!</Text>
            <Button title="Start" buttonStyle={styles.button}
              onPress={() => this.setState({ currentState: QUIZ })} />
          </View>
          : (this.state.currentQuestion < 5)
            ? <View>
              <Text style={styles.text}>{questions[this.state.currentQuestion].question}</Text>
              <View>
                {questions[this.state.currentQuestion].answers.map((ans, i) => {
                  return <Button key={i} title={ans.text} buttonStyle={styles.button}
                    onPress={() => this.advance(ans)} />
                })}
              </View>
            </View>
            : <View>
              <Text style={styles.text}>Your Score: {this.state.score}/5</Text>
              <Button title="Like your score? Want to try again?" buttonStyle={styles.button}
                onPress={() => this.setState({ currentState: QUIZ, currentQuestion: 0, score: 0 })} />
            </View>
        }
      </View>
    )
  }
}
const styles = StyleSheet.create({

  button: {
    backgroundColor: 'orange',
    paddingBottom: 15,
    margin: 5,
    fontWeight: '700'
  },
  text: {
    fontSize: 35,
    fontWeight: 400,
    paddingBottom: 10,
    textAlign: 'center'
  },
  title: {
    fontSize: 50,
    fontWeight: 500,
    paddingBottom: 10,
    color: 'blue'
  }
})
