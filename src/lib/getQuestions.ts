import { questions } from '../questions'

const getQuestions = async (limit: number = 10) => {
	return questions.sort(() => Math.random() - 0.5).slice(0, limit)
}

export default getQuestions
