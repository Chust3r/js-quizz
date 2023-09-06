import Heart from "./icons/Heart"


const Footer = () => {
    return (
        <footer className="flex justify-center gap-2 items-center text-tiny py-2 text-foreground-400">

            <span>Made with</span>
            <div className="relative flex items-center justify-center">
                <Heart className="w-3  h-3 fill-red-500 stroke-red-500" />
                <p className="w-2 h-2 bg-red-500 blur absolute"></p>
            </div>
            <span>by Chust3r</span>
        </footer>
    )
}

export default Footer