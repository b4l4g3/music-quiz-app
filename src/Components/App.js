import React, { Component } from 'react';
import { getQuizData } from './../helper.js';
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
`

const Control = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 5%;
  width: 100%;
`

const Arrow = styled.img`
  width: 40px;
  cursor: pointer;
  margin: 30px 25px;
`

const PageNumber = styled.p`
  padding-bottom: 4px;
  font-family: Roboto;
  font-size: 18px;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.onSiteChanged = this.onSiteChanged.bind(this);
    this.state = {
      currentQuestionIndex: 0,
      done: false
    }
  }

  changeQuestion(direction) {
    this.setState((state) => {
      if (direction === 'right') {
       return state.currentQuestionIndex == 9 ? {currentQuestionIndex: state.currentQuestionIndex + 1, done:true} : {currentQuestionIndex: state.currentQuestionIndex + 1};       
      } else {
        return {
          currentQuestionIndex: state.currentQuestionIndex - 1,
        }
      }
    })
  }

  onSiteChanged(e, question) {
    if (this.state.done) {return}
    let eventtarget = e.currentTarget.value;
    this.setState((state) => {
      const hyperstate = state;
      hyperstate.questions[question.questionIndex].buttonState = eventtarget;
      return hyperstate;
    });
  }

  componentDidMount() {
    getQuizData(this);
  }

  render() {
    console.dir(this.state);
    if (this.state.currentQuestionIndex === 10) {
      return (
        <Wrapper>
        <ResultPage />
        <Control>
            <Arrow src={'./Icons/left-arrow.svg'} onClick={() => this.changeQuestion('left')} />
            <PageNumber>Check out your answers</PageNumber>
          </Control>
          </Wrapper>
      )
    } else if (this.state.questions) {
      const panels = [];
      this.state.questions.forEach((question) => {
        const comp =
          <Panel quizData={question} handleChange={this.onSiteChanged} />;
        panels.push(comp);
      })
      return (
        <Wrapper>
          <GlobalStyle />
          {panels[this.state.currentQuestionIndex]}
          <Control>
            <Arrow src={'./Icons/left-arrow.svg'} onClick={() => this.changeQuestion('left')} />
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
