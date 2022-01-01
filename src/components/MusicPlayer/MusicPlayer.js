import { useParams } from "react-router"

import { useEffect,useState } from "react"

import axios from "../../helpers/axiosForMusic"

import WaveForm from './WaveForm/WaveForm'

import * as Vibrant from 'node-vibrant'

const MusicPlayer =()=>{
const {songId} = useParams();
const [{song,color},setState] = useState({
    song:{
        _id:'',
        name:'Loading',
        artist:'Loading',
        img_url:'',
        song_url:'',
    },
    color:"black"
})

useEffect(()=>{
    const func =async() =>{
        const songData = await axios.get(`/songs/${songId}`)
        console.log(songData)
        Vibrant.from(songData.img_url).getPalette().then(pallete=>{
            
            const colorData = pallete.Vibrant.hex
            setState({
                song:songData,
                color:colorData,
            })
        })
    }
    func()
},[songId])
    return <div style={{backgroundColor:color, minHeight:"100vh"}}>
        <div className="row justify-content-center align-items-start mx-0 pt-0 pt-md-5">
            <img src={song.img_url} alt={song.name} style={{maxHeight:"450px",maxWidth:"450px",width:"100vw"}}/>
        </div>
    

    <h1 className="pt-5 font-weight-bold">{song.name}</h1>
    <small>{song.artist}</small>
    <WaveForm song_url={song.song_url} />
    </div>
}
export default MusicPlayer