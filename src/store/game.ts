import { atom } from 'nanostores'
import { GameQuestion, GameQuizz } from '../types'

const initialValues: GameQuizz = {
	isStart: false,
	isFinished: false,
	questions: [],
	answered: 0,
	unanswered: 0,
	currentQuestion: 0,
	nextQuestion: false,
	prevQuestion: false,
}

// → Store

export const $store = atom<GameQuizz>(initialValues)

const setIsStart = () => {
	$store.set({ ...$store.get(), isStart: !$store.get().isStart })
}

const setQuestions = (questions: GameQuestion[]) => {
	const length = questions.length

	$store.set({
		...$store.get(),
		questions,
		answered: 0,
		unanswered: length,
		nextQuestion: true,
	})
}

const setQuestionsAnswered = () => {
	const { answered, unanswered, ...rest } = $store.get()
	$store.set({ ...rest, answered: answered + 1, unanswered: unanswered - 1 })
}

const setAnswer = (current: number, answer: number) => {
	const { questions, answered, unanswered, currentQuestion, ...rest } =
		$store.get()

	const newQuestions = questions.map((question, i) => {
		if (current === i) {
			return {
				...question,
				userAnswer: answer,
			}
		}
		return question
	})

	$store.set({
		...rest,
		questions: newQuestions,
		answered: answered + 1,
		unanswered: unanswered - 1,
		currentQuestion,
		isFinished: answered + 1 === questions.length,
	})
}

const navQuestion = (index: number) => {
	const { ...rest } = $store.get()

	$store.set({ ...rest, currentQuestion: index })
}

const resetState = () => {
	$store.set(initialValues)
}

// → Actions

export {
	setIsStart,
	setQuestions,
	setAnswer,
	setQuestionsAnswered,
	navQuestion,
	resetState,
}
