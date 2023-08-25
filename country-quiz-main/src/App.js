import Quiz from './components/Quiz';
import QuizResults from './components/QuizResults';

const App = () => {
  return (
    <main>
      <h2 className="quiz-title">Country Quiz</h2>
      <div className="quiz">
        <Quiz />
        <QuizResults />
      </div>
    </main>
  )
}

export default App;