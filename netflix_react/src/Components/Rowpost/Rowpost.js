import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants'
import Youtube from 'react-youtube'

function Rowpost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.urls).then(response=>{
       console.log(response.data.results)
       setMovies(response.data.results)

    }).catch(err=>{
      console.log('network error')
    })    
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('not foundddd')
      }
    })

  }
  
  return (
<div className='row'>
            <h2>{props.title}</h2>
            <div className='posters' >
                {
                  movies.map((obj)=>{
                    return(
                    <img onClick={()=>handleMovie(obj.id)}

                   className={props.isSmall ?'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />)

                  })
                }
            </div>
          { urlId && <Youtube videoId={urlId.key} opts={opts}/>}

        </div>  )
}

export default Rowpost