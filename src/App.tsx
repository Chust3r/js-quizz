import { Button, Link } from "@nextui-org/react"
import Board from "./components/Board"
import Footer from "./components/Footer"
import Github from "./components/icons/Github"

export const App = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center mx-auto container  flex-col">
      <Board />
      <Footer />
      <Link className="absolute top-0 right-0 m-2 " href="https://github.com/Chust3r" target="_blank">
        <Button isIconOnly variant="light"><Github className="w-6 h-6 stroke-foreground" /></Button></Link>
    </main>
  )
}


export default App
