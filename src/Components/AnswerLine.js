import React, { Component } from 'react';
import styled from 'styled-components';



const AnswerLineContainer = styled.div`
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

const CheckCircle = styled.div`
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

class AnswerLine extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         checked: false
      }
    }

    setStateChecked() {
        
    }
    
  render() {
    const quizData = this.props.quizData;
    const answerData = this.props.answerData
    return (    
        <AnswerLineContainer
            onClick = {() => 
            this.change} > 
                <CheckCircle status='unselected' />
                        <Answer dangerouslySetInnerHTML={{ __html: `${answerData}` }} />
            </AnswerLineContainer>
    )
  }
}

export default AnswerLine
