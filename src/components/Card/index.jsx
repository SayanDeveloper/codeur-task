import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({movie}) => {
    const navigate = useNavigate()

    return (
        <div className='w-[calc(50vw-35px)] xs:w-[calc(50vw-55px)] fl-xs:w-[200px] cursor-pointer' onClick={() => navigate(`/movie/${movie.id}`)}>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className='h-[auto] fl-xs:h-[300px] object-cover rounded-[20px] mb-[8px]' />
            <p className='text-center'>{movie.title} </p>
            <div className='flex flex-row justify-center items-center gap-[10px] text-[#6f7075] text-sm mt-[2px]'>
                <p className='capitalize'>{movie.media_type}</p>
                <div className='rounded-[50%] bg-[#6f7075] h-[5px] w-[5px]'></div>
                <p>{movie.release_date.slice(0, 4)}</p>
            </div>
        </div>
    )
}

export default Card