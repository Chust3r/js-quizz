import { useState, useEffect } from "react"
import { useStore } from "@nanostores/react"
import { $store, setQuestions, setIsStart } from "../store/game"
import img from "../assets/javascriptlogo.png"
import Game from "./Game"
import { Button, Image } from "@nextui-org/react"
import { confettiFrames } from "../lib/confettiFrames"
import Results from "./Results"
import getQuestions from "../lib/getQuestions"

const Board = () => {

    const [score, setScore] = useState<number>(0)
    const { isStart, isFinished, questions: q } = useStore($store)

    const onStart = async () => {
        const questions = await getQuestions(5)
        setIsStart()
        setQuestions(questions)
    }

    if (isFinished) {
        confettiFrames()
    }

    useEffect(() => {
        setScore((q.filter(question => question.answerID === question.userAnswer).length) / q.length)

    }, [isFinished, q])

    return (
        <div className="flex flex-col gap-5 flex-1 justify-center md:m-0 m-2">
            <div className="flex gap-5 items-center px-2 md:px-0">
                <Image src={img} alt="" width={75} height={75} isBlurred />
                <h1 className="text-4xl font-medium text-foreground">JavaScript Quizz</h1>
            </div>
            <>
                <div >
                    {isStart ? <Game /> : <div className="flex justify-center">
                        <Button onPress={onStart} color="primary" variant="shadow">Start</Button>
                    </div>}
                </div>
            </>
            {isFinished && <Results progress={score} />}
        </div>
    )
}

export default Board