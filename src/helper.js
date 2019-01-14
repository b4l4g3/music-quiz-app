const randomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const setStateTemplate = (quizData, component) => {
    const questions = quizData.results.map(key => {
        key.incorrect_answers.splice(randomNumber(quizData.results.length+1), 0, key.correct_answer)
        return {
            question: key.question,
            answers: key.incorrect_answers,
            correct_answer: key.correct_answer
        }
    })
    return {
        questions,
        currentQuestion: questions[component.state.index]
    }
}

const getQuizData = (component) => {
    fetch('https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple')
        .then(resp => resp.json())
        .then(resp => {
            component.setState(setStateTemplate(resp, component))
        })
}

export { getQuizData }