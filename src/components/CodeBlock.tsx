import { useEffect, useState } from "react"
import hljs from "highlight.js"
import lang from "highlight.js/lib/languages/javascript"
import "highlight.js/styles/atom-one-dark.css"


const CodeBlock = ({ source }: { source: string }) => {

    const [code, setCode] = useState("")

    useEffect(() => {



        hljs.registerLanguage("js", lang)
        setCode(hljs.highlight(source, { language: "js" }).value)
        hljs.highlightAll()
    }, [source])

    return (
        <pre className="rounded overflow-hidden relative h-full">
            <div className="m-2 absolute flex gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full relative">
                    <span className="w-3 h-3 bg-red-400 rounded-full absolute blur" />
                </div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full relative">
                    <span className="w-3 h-3 bg-yellow-200 rounded-full absolute blur" />
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full relative">
                    <span className="w-3 h-3 bg-green-500 rounded-full absolute blur" />
                </div>

            </div>
            <code className="text-sm !pt-7 font-code language-js" dangerouslySetInnerHTML={{ __html: code }} />
        </pre>
    )
}

export default CodeBlock
