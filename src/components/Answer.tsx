import { Button } from "@nextui-org/react"
import type { Answer } from "../types"
import clsx from "clsx"



interface ComponentProps {
    answer: Answer,
    isDisabled: boolean,
    isCorrect: boolean,
    isSelected: boolean,
    onPress: (answerID: number) => void
}

const Answer = ({ answer, isDisabled, onPress, isSelected, isCorrect }: ComponentProps) => {

    const classes = {
        success: "bg-lime-600",
        error: "bg-rose-500",
        default: ""
    }

    const validate = () => {
        if (isCorrect && isSelected) return classes.success
        if (!isCorrect && isSelected) return classes.error
        return classes.default
    }



    return <Button onPress={() => onPress(answer.id)} isDisabled={isDisabled} className={clsx(validate(), "font-medium")} >{answer.value}</Button>
}

export default Answer
