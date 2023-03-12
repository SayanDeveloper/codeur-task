import React from 'react'
import { BsPeopleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const SearchResultCard = ({result}) => {
  const navigate = useNavigate()

  return (
    <div className='w-full flex gap-3 mb-[20px] cursor-pointer' onClick={() => navigate(`/movie/${result?.id}`)}>
        <img src={`https://image.tmdb.org/t/p/original${result?.poster_path}`} className='w-[110px] h-[auto] object-cover rounded-[20px] mb-[8px]' />
        <div className='flex flex-col justify-between py-2'>
            <div>
                <h2 className='mb-[3px] text-lg'>{result?.title}</h2>
                <p className='text-[#aaa]'>Genres</p>
            </div>
            <div className='text-sm'>
                <div className='flex gap-2 mb-[10px]'>
                    <div className='p-4 py-2 bg-[#262a34] rounded-full'>
                        {result?.release_date?.slice(0,4)}
                    </div>
                    <div className='p-4 py-2 bg-[#262a34] rounded-full'>
                        {result?.popularity}
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div className='flex items-center gap-1 p-4 py-2 bg-[#262a34] rounded-full'>
                        <BsPeopleFill /> {result?.vote_count}
                    </div>
                    <div className='p-4 py-2 bg-[#262a34] rounded-full'>
                        {result?.original_language}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchResultCard