import fetchRepos from "../axios/config"

import { useState, useEffect } from "react"

import { Link } from "react-router-dom"
import './Animation.css'
import './Projects.css'

export function Projects(){

    const [repos, setRepos] = useState([])

    const getRepos = async ()=>{
        try {
            const repos = await fetchRepos.get('/repos')

            const data = repos.data

            setRepos(data)


        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getRepos()
    },[])

    return(
        <div className="max-w-7xl m-auto flex flex-wrap justify-center gap-8 text-white max-md:flex-col has-shown">
            {
                repos.length === 0? (<p className="lds-ripple"><div></div></p>) : (
                    repos.map((repo)=>(
                        <div key={repo.id} className="card flex flex-col justify-between w-1/4 bg-gradient-to-b from-sky-500 to-indigo-500 p-8 rounded-md shadow-lg max-md:w-full">
                            <h2 className="font-bold">{repo.name}</h2>
                            <p className="date">{repo.description}</p>
                            <div className="flex gap-4  w-full justify-center">
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">Ver no Github</a>
                                {
                                    repo.homepage === null ?  ("") : (<a href={repo.homepage}target="_blank" rel="noopener noreferrer">Visitar página</a>)
                                }
                            </div>
                        </div>
                    ))
                ) 
            }
        </div>
    )
}