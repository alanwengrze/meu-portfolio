import { useState } from "react"

import { Link } from "react-router-dom"
import './Navbar.css'
export function Navbar(){
    const [menu, setMenu] = useState(false)
    const toggleMenu = ()=>{
      setMenu(!menu)
    }
    return(
            <nav className="w-full m-auto flex items-center justify-center px-6 py-6 max-md:flex-col shadow-lg">
                {/* <h2 className="text-xl font-bold text-white">
                    <Link to={'/'}>{"{alanwengrze:'web-developer'}"}</Link>
                </h2> */}
                <ul className={`flex gap-4 text-xl max-md:mt-4 max-sm:text-base font-light text-zinc-800`}>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/projects'}>Projetos</Link>
                    </li>
                    <li>
                        <Link to={'/abilities'}>Habilidades</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contato</Link>
                    </li>
                </ul>
            </nav>
    )
}