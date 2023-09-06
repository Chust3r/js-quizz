import { Button } from "@nextui-org/react"
import Board from "./components/Board"
import Footer from "./components/Footer"
import Github from "./components/icons/Github"

export const App = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center mx-auto container  flex-col">
      <Board />
      <Footer />
      <Button isIconOnly className="absolute top-0 right-0 m-2 " variant="light"><Github className="w-6 h-6 stroke-foreground" /></Button>
    </main>
  )
}


export default App
