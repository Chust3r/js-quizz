interface Answer {
	id: number
	value: string
}

interface Question {
	question: string
	code: string
	answers: Answer[]
	answerID: number
}

interface GameQuestion extends Question {
	userAnswer?: number
}

interface GameQuizz {
	isStart: boolean
	isFinished: boolean
	questions: GameQuestion[]
	answered: number
	unanswered: number
	prevQuestion: boolean
	currentQuestion: number
	nextQuestion: boolean
}

export type { Question, GameQuizz, GameQuestion, Answer }
