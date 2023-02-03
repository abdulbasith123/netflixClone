import React from 'react';
import { useEffect,useState } from 'react';
import instance from './Instance';
import './Row.css';

function Row({title,fetchUrl,isLargeRow}) {
  const base_url="https://image.tmdb.org/t/p/original/"

    const [movies,setMovies]=useState([]);

    useEffect(() => {
      
        async function fetchData(){
            const request=await instance.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData()
    }, [])
    

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
        {movies.map(movie=>(
          <img className='row_poster' 
          src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
          alt={movie.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Row