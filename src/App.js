import React from 'react';
import './index.scss';

const questions = [
    {
        title: 'React - is ... ?',
        variants: ['library', 'framework', 'app'],
        correct: 0,
    },
    {
        title: 'A component - is ... ',
        variants: ['app', 'part of app or page', `that, what i don't know`],
        correct: 1,
    },
    {
        title: 'What is JSX?',
        variants: [
            'this is simple HTML',
            'this is a function',
            'this ist HTML, but with the ability to execute JS code',
        ],
        correct: 2,
    },
];

function Result({ correct }) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>You guessed {correct} answers out of {questions.length}</h2>
            <a href='/'>
                <button>Try again</button>
            </a>
        </div>
    );
}

function Game({ step, question, onClickVariants }) {
    const percentage = Math.round((step / questions.length) * 100)

    return (
        <>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((text, index) => (
                        <li onClick={() => onClickVariants(index)} key={text}>{text}</li>
                    ))
                }
            </ul>
        </>
    );
}

function App() {
    const [step, setStep] = React.useState(0);
    const [correct, setCorrect] = React.useState(0);
    const question = questions[step]

    const onClickVariants = (index) => {
        console.log(step, index);
        setStep(step + 1);

        if (index === question.correct) {
            setCorrect(correct + 1);
        }
    }

    return (
        <div className="App">
            {
                step !== questions.length ? (<Game step={step} question={question} onClickVariants={onClickVariants} />)
                    : (
                        <Result correct={correct} />
                    )}
        </div>
    );
}

export default App;
