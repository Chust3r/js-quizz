import { useEffect } from 'react'
import { useStore } from '@nanostores/react'
import { $store, setAnswer } from '../store/game'

const useQuestion = () => {
	const { currentQuestion, questions } = useStore($store)

	const { code, question, answers, userAnswer, answerID } =
		questions[currentQuestion]

	useEffect(() => {}, [currentQuestion, userAnswer])

	return {
		question,
		code,
		answers,
		total: questions.length,
		userAnswer,
		answerID,
		setAnswer: (answerID: number) => setAnswer(currentQuestion, answerID),
	}
}

export default useQuestion
