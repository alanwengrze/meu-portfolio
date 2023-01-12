import { useState, useEffect } from "react"

import fetchRepos from "../axios/config"

import { useParams } from "react-router-dom"

export function Project(){

    const {id} = useParams()
    const [repo, setRepo] = useState([])

    const getRepo = async()=>{
        try {
            const response = await fetchRepos(`repos/${id}`)

            const data = response.data

            console.log(data)

            setRepo(data)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getRepo()
    },[])

    return(
        <div>
            {
                
                    <div>
                        <h2>{repo.name}</h2>
                    </div>
                
            }
        </div>
    )
}