import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import "../../styles/MovieDetails.css"

const MovieDetials = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState({});
  const [movieReviews, setMovieReviews] = useState({});

  const reviewFetcher = async () => {
    if (id) {
      const res = await axios.get(process.env.REACT_APP_BASE_URL+`/movie/${id}/reviews?api_key=`+process.env.REACT_APP_TMDB_KEY)
      setMovieReviews(res.data.results)
      // console.log(res.data)
    }
  }

  const movieDetialsFetcher = async () => {
    if (id) {
      const res = await axios.get(process.env.REACT_APP_BASE_URL+`/movie/${id}?api_key=`+process.env.REACT_APP_TMDB_KEY)
      // console.log(process.env.REACT_APP_BASE_URL+`/movie/${id}?api_key=`+process.env.REACT_APP_TMDB_KEY)
      setMovieDetails(res.data)
      console.log(res.data)
    }
  }

  // console.log(movieDetails?.poster_path)

  useEffect(() => {
    movieDetialsFetcher()
    reviewFetcher()
  }, [id])

  return (
    <>
      <div className='bg-image-holder '>
        <img src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`} className="absolute top-0 left-0 w-screen opacity-20 h-[100%] object-cover" />
        <div className='fl-xs:max-w-[430px] fl-sm:max-w-[661px] fl-md:max-w-[895px] fl-lg:max-w-[1120px] pt-[50px] mx-auto relative z-10'>
          <div className='flex flex-col fl-sm:flex-row gap-5 h-[100%] items-center'>
              <img src={`https://image.tmdb.org/t/p/original${movieDetails?.poster_path}`} className="w-[200px]" />
              <div className='p-6 fl-xs:p-0'>
                <div className='font-bold text-[25px] mb-3'>{movieDetails?.title}</div>
                <div className='font-semibold mb-4'>{movieDetails?.overview}</div>
                <div className='flex gap-5 text-[15px]'>
                  <div className='p-4 py-1 bg-[black] rounded-full'>{movieDetails?.release_date?.slice(0,4)}</div>
                  <div className='p-4 py-1 bg-[black] rounded-full flex items-center gap-2'>
                    <AiFillStar color='yellow' />
                    <p>{Math.round(movieDetails?.vote_average * 10) / 10}</p>
                  </div>
                  <div className='p-4 py-1 bg-[black] rounded-full'>
                    {movieDetails?.runtime} mins
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className='fl-xs:max-w-[430px] fl-sm:max-w-[661px] fl-md:max-w-[895px] fl-lg:max-w-[1120px] pt-[50px] mx-auto'>
        <h1>Reviews</h1>
      </div>
    </>
  )
}

export default MovieDetials
