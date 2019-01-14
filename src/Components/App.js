import React, { Component } from 'react';
import { getQuizData } from './../helper.js';
import styled from 'styled-components';
import Panel from './Panel';
// import Control from './Control';

const Wrapper = styled.div`

`

const Control = styled.div`
  
`

const Arrow = styled.img`
  width: 15px;
  cursor: pointer;
`

const PageNumber = styled.p`

`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  changeQuestion(direction) {
    this.setState((state) => {
      if (direction === 'right') {
        return {
          index: state.index + 1,
          currentQuestion: state.questions[state.index + 1]
        }
      } else {
        return {
          index: state.index - 1,
          currentQuestion: state.questions[state.index - 1]
        }
      }
    })
  }

  componentDidMount() {
    getQuizData(this);
  }


  render() {
    console.dir(this.state)
    if (this.state.questions) {
      return (
        <Wrapper>
          <Panel quizData={this.state} />
          <Control>
            <Arrow src={'./Icons/left-arrow.svg'} onClick={() => this.changeQuestion('left')} />
            <PageNumber>{this.state.index + 1}/{this.state.questions.length}</PageNumber>
            <Arrow src={'./Icons/right-arrow.svg'} onClick={() => this.changeQuestion('right')} />
          </Control>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper></Wrapper>
      )
    }
  }
}

export default App;
