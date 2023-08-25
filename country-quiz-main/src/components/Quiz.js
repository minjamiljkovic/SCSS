import quizImage from '../images/undraw_adventure_4hum 1.svg';
// import { useAppContext } from '../context';y

const Quiz = () => {
  return (
    <div className="quiz-holder">
      <img src={quizImage} alt="quiz adventure" className="holder-image" />
      <div className="quiz-question">
        <div className="question-flag">
          <img src="https://flagcdn.com/w320/pe.png" alt="country flag" />
          <h3>Which country does this flag belong to?</h3>
        </div>
      </div>
      <div className="quiz-answers">
        <button type="button" className="quiz-answer">Answer Item One</button>
        <button type="button" className="quiz-answer">Answer Item Two</button>
        <button type="button" className="quiz-answer">Answer Item Three</button>
        <button type="button" className="quiz-answer">Answer Item Four</button>
      </div>
      <div className="quiz-next">
        <button type="button" className="btn">Next</button>
      </div>
    </div>
  )
}

export default Quiz;