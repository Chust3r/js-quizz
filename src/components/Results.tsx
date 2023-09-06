import { Button } from "@nextui-org/react"
import { motion as m } from "framer-motion"
import { resetState } from "../store/game"

interface ComponentProps {
  progress: number
}




const Results = ({ progress }: ComponentProps) => {


  return (
    <div className="w-full h-full inset-0 absolute bg-background/30 backdrop-blur-sm z-[100] flex justify-center items-center select-none">
      <div className="w-[25rem] h-[18.75rem] items-center justify-center flex bg-content1 rounded-2xl flex-col relative overflow-hidden">
        <h2 className="text-2xl font-medium">Your Score</h2>
        
        <p className="w-96 h-20 bg-content1 absolute rounded-full blur-3xl rotate-45"/>
        <div className="flex items-center justify-center relative ">
          <svg className="w-[12.5rem] h-[12.5rem] -rotate-90" viewBox="0 0 100 100">
            <circle cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="stroke-slate-50 opacity-10" />
            <m.circle cx="50"
              cy="50"
              r="30"
              pathLength="0"
              className="stroke-yellow-500"
              animate={{   
                pathLength: progress
              }}
              transition={{
                delay: .5,
                type: "spring"
              }}
            />
          </svg>
          <span className="font-medium text-3xl absolute m-auto">{`${(progress * 100).toFixed(0)}%`}</span>
        </div>
        <Button onPress={resetState} color="primary" className="font-medium">Try again</Button>
      </div>
    </div>
  )
}

export default Results