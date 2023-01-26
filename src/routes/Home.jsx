import './Animation.css'
import './Home.css'
import avatar from '../assets/avatar.svg'

export function Home(){
    return(
        <section className="has-shown flex justify-around items-center w-5/6 m-auto max-lg:flex-col">
            <aside className="flex flex-col gap-3">
                <h1 className="text-white text-5xl font-bold max-md:text-2xl">Olá, eu sou {<br></br>} Alan Wengrze</h1>
                <h2 className="text-white text-2xl font-thin max-md:text-xl">Desenvolvedor front-end</h2>
            </aside>
            <img src={avatar} alt="Alan Wengrze" className='w-96 hover:fill-slate-200' />
           
        </section>
    )
}