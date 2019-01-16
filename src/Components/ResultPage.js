import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`

const ResultsH1 = styled.p`

`

const Procent = styled.p`

`

const ResultsH2 = styled.p`

`

const ButtonContainer = styled.div`

`

const Button = styled.button`

`


class ResultPage extends Component {
    render() {
        const resultTexts = {
            a: 'Good job!',
            b: 'Not bad.',
            c: 'You can do better.'
        }
        let resultText;
        const result = this.props.result;
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
                    <Button>Check out your answers</Button>
                    <Button>Try Again</Button>
                </ButtonContainer>
            </Wrapper>
        )
    }
}

export default ResultPage;
