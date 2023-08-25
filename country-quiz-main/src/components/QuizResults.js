import quizImage from '../images/undraw_winners_ao2o 2.svg';

const QuizResults = () => {
  return (
    <div className="quiz-results">
      <img src={quizImage} alt="quiz results" />
      <div className="results-information">
        <h1>Results</h1>
        <p>You got <span>0</span> correct answer</p>
      </div>
      <button type="button" className="btn">Try again</button>
    </div>
  )
}

export default QuizResults;