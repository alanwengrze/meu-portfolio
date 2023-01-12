import './Animation.css'
import './Home.css'

export function Home(){
    return(
        <section className="has-shown flex justify-around w-5/6 m-auto">
            <aside className="flex flex-col gap-3">
                <h1 className="text-white text-5xl font-bold">Olá, eu sou {<br></br>} Alan Wengrze</h1>
                <h2 className="text-blue-300 text-2xl font-thin">Desenvolvedor front-end</h2>
            </aside>
           
        </section>
    )
}