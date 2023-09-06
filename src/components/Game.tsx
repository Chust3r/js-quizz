
import { navQuestion } from "../store/game"
import { Card, CardFooter, CardHeader, CardBody, Pagination } from "@nextui-org/react"
import useQuestion from "../hooks/useQuestion"
import CodeBlock from "./CodeBlock"
import Answer from "./Answer"


const Game = () => {

    const { code, question, answers, total, setAnswer, answerID, userAnswer } = useQuestion()

    const onChange = (value: number) => {
        navQuestion(value - 1)
    }

    return (

        <Card className="min-w-fit w-[550px]">
            <CardHeader>
                <p className="text-lg text-foreground font-medium px-2">{question}</p>
            </CardHeader>
            <CardBody>
                <CodeBlock source={code} />
            </CardBody>
            <CardFooter>
                <div className="flex flex-col gap-4 w-full justify-center items-center px-2">
                    <div className="grid grid-cols-2 gap-2 items-center  w-full">
                        {answers.map(answer => <Answer answer={answer} key={answer.id} onPress={setAnswer} isDisabled={Boolean(userAnswer)}
                            isCorrect={answerID === userAnswer} isSelected={userAnswer === answer.id} />)}
                    </div>
                    <Pagination total={total} initialPage={1} onChange={onChange} />
                </div>
            </CardFooter>
        </Card>
    )

}

export default Game