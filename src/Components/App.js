import React, { Component } from 'react';
import { getQuizData, makeResults } from './../helper.js';
import styled, { createGlobalStyle } from 'styled-components';
import Panel from './Panel';
import ResultPage from './ResultPage';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Merriweather|Roboto');
`

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  user-select: none;
  background-color: #fff5ec;
  align-items: center;
  font-size: 16px;
  background-image: linear-gradient(to top, #ff9e96 0%, #f5efef 100%);
  color: #763333;
  @media (max-width: 350px) {
    font-size: 14px};
  }
}
`

const Control = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  bottom: 3%;
  @media (max-width: 350px) {
    margin-bottom: -10px;
  }
`

const Arrow = styled.img`
  width: 40px;
  cursor: pointer;
  margin: 30px 25px;
  visibility: ${props => props.visible===0 ? 'hidden' : 'visible'}
  @media (max-width: 350px) {
    width: 1.8em;
    margin: 15px 20px;
  }
`

const PageNumber = styled.p`
  padding-bottom: 4px;
  font-family: Roboto;
  font-size: 1.1em;
`


class App extends Component {
  constructor(props) {
    super(props);
    this.onOptionChanged = this.onOptionChanged.bind(this);
    this.changeQuestion = this.changeQuestion.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      done: false
    }
  }

  changeQuestion(direction) {
    this.setState((state) => {
      if (direction === 'right') {
       return state.currentQuestionIndex === 9 ? {currentQuestionIndex: state.currentQuestionIndex + 1, done:true, correctAnswers: makeResults(this)} : {currentQuestionIndex: state.currentQuestionIndex + 1};       
      } else {
        return {
          currentQuestionIndex: state.currentQuestionIndex - 1,
        }
      }
    })
  }

  onOptionChanged(e, question) {
    if (this.state.done) {return}
    let eventtarget = e.currentTarget.value;
    this.setState((state) => {
      const hyperstate = state;
      hyperstate.questions[question.questionIndex].buttonState = eventtarget;
      return hyperstate;
    });
  }

  reset() {
    this.setState({
      done: false
    })
    getQuizData(this);
    
  }

  componentDidMount() {
    getQuizData(this);
  }

  render() {
    console.dir(this.state)
    if (this.state.currentQuestionIndex === 10) {
      return (
        <Wrapper>
        <ResultPage result={this.state.correctAnswers} backFunc={this.changeQuestion} tryAgainFunc={this.reset} />
          </Wrapper>
      )
    } else if (this.state.questions) {
      const panels = [];
      this.state.questions.forEach((question) => {
        const comp =
          <Panel done={this.state.done} quizData={question} handleChange={this.onOptionChanged} />;
        panels.push(comp);
      })
      return (
        <Wrapper>
          <GlobalStyle />
          {panels[this.state.currentQuestionIndex]}
          <Control>
            <Arrow visible={this.state.currentQuestionIndex} src={'./Icons/left-arrow.svg'} onClick={() => this.changeQuestion('left')} />
            <PageNumber>{this.state.currentQuestionIndex + 1} / {this.state.questions.length}</PageNumber>
            <Arrow src={'./Icons/right-arrow.svg'} onClick={() => this.changeQuestion('right')} />
          </Control>
        </Wrapper>
      );
    }
    else {
      return (
        <Wrapper></Wrapper>
      )
    }
  }
}

export default App;
