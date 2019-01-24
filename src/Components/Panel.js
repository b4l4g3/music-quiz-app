import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    @media (min-width: 400px) {
        border-width: 3px;
        border-style: solid;
        border-image: linear-gradient( to bottom, #c95a5a, rgba(0, 0, 0, 0) ) 1 100%;
    };
`

const Question = styled.p`
    font-family: Merriweather;
    line-height: 1.5em;
    font-size: 1.45em;
    text-align: center;
`

const AnswerWrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-self: center;
`

const AnswerLineContainer = styled.label`
    display: flex;
    flex-direction: row;
    margin: -5px 0px;
`

const Answer = styled.p`
    font-family: Roboto;
    font-family: Roboto;
    font-size: 1.15em;
    margin-left: 15px;
    width: 200px;
    text-align: center;
    padding-right: 15px;
    cursor: pointer;
`

const CheckCircle = styled.input`
    appearance: none;
    height: 25px;
    width: 25px;
    border: 3px solid #c95a5a;
    border-radius: 50%;
    display: inline-flex;
    justify-self: center;
    margin-top: 18.5px;
    outline: none;
    cursor: pointer;
    background-color: ${props => props.checked ? '#c95a5a' : '#f6e5e491'} 
`

class Panel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        const done = this.props.done;
        const quizData = this.props.quizData;
        const handleChange = this.props.handleChange;
        const answers = [];
        quizData.answers.forEach((answer) => {
            const answerIndex = quizData.answers.indexOf(answer);
            const styles = {
                correct: {
                    color: 'MediumSeaGreen '
                },
                incorrect: {
                    color: 'Crimson'
                }
            }
            let answerStyle;
            if (done && Number(quizData.buttonState)===answerIndex) {
                String(quizData.correct_answer) === String(answer) ? answerStyle = styles.correct : answerStyle = styles.incorrect;
            } else if (done && String(answer) === String(quizData.correct_answer) && quizData.buttonState) {
                answerStyle = styles.correct;
            }
            // console.dir(answers[quizData.buttonState])
            // console.dir(quizData.correct_answer)
            const comp =
                <AnswerLineContainer
                    key={answerIndex}
                    status={'asd'}
                    style={answerStyle}
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