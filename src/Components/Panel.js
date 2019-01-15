import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 80%;
    margin: 15% auto;
    display: flex;
    flex-direction: column;
`

const Question = styled.p`
    font-family: Merriweather;
    line-height: 1.5em;
    font-size: 1.45em;
`

const AnswerWrapper = styled.form`
    display: flex;
    flex-direction: column;
`

const AnswerLineContainer = styled.label`
    display: flex;
    flex-direction: row;
    margin: -5px 0px;
`

const Answer = styled.p`
    font-family: Roboto;
    font-family: Roboto;
    font-size: 1.25em;
    margin-left: 15px;
`

const CheckCircle = styled.input`
    height: 25px;
    width: 25px;
    border: 3px solid #FF6B1D;
    border-radius: 50%;
    content: '';
    display: inline-flex;
    justify-self: center;
    margin-top: 18.5px;
    background-color: ${props =>
        props.status === 'selected' ? "#FF6B1D" : "white"
    }
`

class Panel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    componentDidMount() {
        console.log('mounted')
    }

    render() {
        const quizData = this.props.quizData;
        const handleChange = this.props.handleChange;
        const answers = [];
        quizData.answers.forEach((answer) => {
            const answerIndex = quizData.answers.indexOf(answer);
            const comp =
                <AnswerLineContainer
                    key={answerIndex}
                    status={'asd'}
                >
                    <CheckCircle
                    type="radio"
                        value={answerIndex}
                        checked={Number(quizData.buttonState) === answerIndex} 
                        onChange={(e) => {
                            handleChange(e, quizData);
                        }}
                    />
                    <Answer dangerouslySetInnerHTML={{ __html: `${answer}` }}  ></Answer>
                </AnswerLineContainer>;
            answers.push(comp);
        })
        return (
            <Wrapper>
                <Question dangerouslySetInnerHTML={{ __html: `${quizData.question}` }}></Question>
                <AnswerWrapper>{answers}</AnswerWrapper>
            </Wrapper>
        );
    }
}

export default Panel;