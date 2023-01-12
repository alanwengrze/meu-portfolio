import { FaReact, FaJs, FaHtml5, FaCss3, FaGit, FaGithub, FaNode, FaFigma } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"

import './Abilities.css'
import './Animation.css'

export function Abilities(){
    return(
        <section className="h-screen min-h-full has-shown max-w-3xl m-auto flex flex-col justify-center">
            <aside className=" flex flex-wrap items-center  w-3/5 m-auto gap-6 max-md:w-full">
                <p>
                    <FaReact />
                </p>
                <p>
                    <FaJs />
                </p>
                <p>
                    <FaHtml5 />
                </p>
                <p>
                    <FaCss3 />
                </p>
                <p>
                    <FaGit />
                </p>
                <p>
                    <FaGithub />
                </p>
                <p>
                    <SiTailwindcss />
                </p>
                <p>
                    <FaNode />
                </p>
                <p>
                    <FaFigma />
                </p>
            </aside>
        </section>
    )
}