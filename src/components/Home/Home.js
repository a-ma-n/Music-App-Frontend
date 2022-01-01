import {Link} from 'react-router-dom'
import useSongsList  from "../../helpers/useSongsList"
import FeatherIcon from 'feather-icons-react'

const Home =()=>{
    const songs =useSongsList()
    console.log(songs)
    
    return (
    <div>
    <Link to="/search" className="p-3 d-flex justify-content-end">
        <FeatherIcon icon="search" />
    </Link>
        <div className="container mx-auto mt-5">
        <h1>Latest Songs</h1>
        <div className="row justify-content-around">
            {songs.map(song =>{
                return(
                    <Link
                    to = {`/play/${song._id}`}
                    className="col-5 col-md-4 col-lg-3 my-4"
                    key={song._id}
                    >
                        <img src={song.img_url} className="w-100" alt={song.name}/>
                        <h6 className="mt-2 mb-0">{song.name}</h6>
                        <small className='text-muted'>{song.artist}</small>
                    </Link>
                )
            })}
        </div>
    </div>
    </div>
        )
}
export default Home