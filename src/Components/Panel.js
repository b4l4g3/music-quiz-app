import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`

const Question = styled.p`

`

const AnswerContainer = styled.div`

`

const Answer = styled.p`
  &:before {
    height: 25px;
    width: 25px;
    border: 3px solid #FF6B1D;
    border-radius: 50%;
    content: '';
    display: inline-flex;
    margin-right: 15px;
  }
`

class Panel extends Component {
    render() {
        const quizData = this.props.quizData;
        const answers = [];
        quizData.currentQuestion.answers.forEach((answer) => {
            const comp = 
                <Answer dangerouslySetInnerHTML={{ __html: `${answer}` }}
                    key={quizData.currentQuestion.answers.indexOf(answer)}></Answer>
            answers.push(comp);
        })
        return (
            <Wrapper>
                <Question dangerouslySetInnerHTML={{ __html: `${quizData.currentQuestion.question}` }}></Question>
                <AnswerContainer>
                    {answers}
                </AnswerContainer>
            </Wrapper>
        );
    }
}

export default Panel;