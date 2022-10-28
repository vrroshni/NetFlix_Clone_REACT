import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'

function Rowpost(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
       console.log(response.data.results)
       setMovies(response.data.results)

    }).catch(err=>{
      console.log('network error')
    })
    
  }, [])
  
  return (
<div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                  movies.map((obj)=>{
                    return(<img className='poster' alt='poster' src={`${imageUrl+obj.backdrop_path}`} />)

                  })
                }
            </div>
        </div>  )
}

export default Rowpost