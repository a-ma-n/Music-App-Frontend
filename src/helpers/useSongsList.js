import { useState,useEffect } from "react";

import axios from "./axiosForMusic";

const useSongsList = (query='') =>{
    // syntax for useState

    // songs -> the actual songs array
    // setSongs -> function to set the songs array, [] is the default value
    const [songs,setSongs] = useState([]);

    useEffect(()=>{
    const fetchSongs = async () =>{
        const data = await axios.get(`/search?q=${query}`)
        setSongs(data)//cannot do songs = data , as this is not a norma variable but a reactive variable
    }
    fetchSongs();
    },[query])// This is the array of dependencies, if any of the dependencies changes, the useEffect will run again
    console.log(songs)
    return songs;
}
// we need to start the name with use -> tells react we are writing a custom hook

export default useSongsList