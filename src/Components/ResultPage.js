import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: Roboto;
`

const ResultsH1 = styled.p`
position: fixed;
top: 25%;
font-size: 30px;
font-family: Merriweather;
letter-spacing: 1px;
`

const Procent = styled.p`
color: #FF884A;
font-size: 40px;
font-weight: 600;
padding-top: 50px;
text-shadow: 0.2px 0.2px 3px orange;
`

const ResultsH2 = styled.p`
font-size: 20px;
margin-top: 5px;
`

const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
margin-top: 25px;
`

const Button = styled.button`
margin-bottom: 10px;
background-color: #FF6B1D;
border: 0;
padding: 10px;
color: white;
border-radius: 3px;
cursor: pointer;
    &:focus {
        outline:0;
    }
    &:active {
        box-shadow: inset 3px 3px 10px 1px rgba(0, 0, 0, 0.2);
    }
    &:hover {
        background-color: #FF884A;
        color: #e7e7e7;
    }
`


class ResultPage extends Component {
    render() {
        const result = this.props.result;
        const backFunc = this.props.backFunc;
        const tryAgainFunc = this.props.tryAgainFunc;
        const resultTexts = {
            a: 'Good job!',
            b: 'Not bad.',
            c: 'You can do better.'
        }
        let resultText;
        switch (true) {
            case (result<4):
            resultText = resultTexts.c;
            break;
            case (result<7):
            resultText = resultTexts.b;
            break;
            default:
            resultText = resultTexts.a;
            break;
        }
        return (
            <Wrapper>
                <ResultsH1>Quiz Results</ResultsH1>
                <Procent>{result/10*100}%</Procent>
                <ResultsH2>{resultText}</ResultsH2>
                <ButtonContainer>
                    <Button onClick={() => backFunc('left')}>Check out your answers</Button>
                    <Button onClick={() => tryAgainFunc()}>Try Again</Button>
                </ButtonContainer>
            </Wrapper>
        )
    }
}

export default ResultPage;
