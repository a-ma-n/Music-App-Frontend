import { useState } from "react"

import useSongsList from "../../helpers/useSongsList"

import FeatherIcon from 'feather-icons-react'
import { Link } from "react-router-dom"
const Search =()=>{
    const [query,setQuery]= useState("")//by def the value is ""
    const songs =useSongsList(query)

    const handleChange =(e)=>{
        setQuery(e.target.value)
    }

    return <>
    
    <div className="pb-0 d-flex fixed-top end-0 justify-content-end align-items-center">
        <input
            value = {query}
            className="rounded-pill bg-secondary py-2 px-5 border-0 flex-grow-1"
            style={{marginLeft:'56px'}}
            onChange={handleChange}
            />
            <div className="p-3">
                <FeatherIcon icon="search" />
            </div>
            </div>
            <div className="container mx-auto mt-5">
                {
                    songs.length !== 0 ?(
                        <>
                        <hr/>
                        <h6 className="text-muted m-4">Most Releveant Results </h6>
                        
                        <div className="d-flex w-100  justify-content-center">
                            {songs.slice(0,4).map(song=>{
                                return(
                                    <Link 
                                    to = {`/play/${song._id}`}
                                    className="col-3 px-1"
                                    key={song._id}
                                    >
                                        <img src={song.img_url} className="w-100"  alt={song.name}/>
                                        
                                    </Link>
                                )
                            })}
                        </div>
                        <hr/>
                        <h6 className="text-muted mt-4">All Results </h6>
                        <ul className="list-unstyled p-0">
                            {songs.map(song=>{
                                return(
                                    <Link 
                                    to = {`/play/${song._id}`}
                                    key={song._id}
                                    >
                                        <l1 className='my-4 d-flex justify-content-between'>
                                        <h6>{song.name}</h6>
                                        <FeatherIcon icon='external-link'/>
                                        </l1>
                                    </Link>
                                )
                            })}
                        </ul>
                        </>
                    ):<h6 className="text-muted ">No Results Found</h6>
                }
            </div>
    </>
}
export default Search
