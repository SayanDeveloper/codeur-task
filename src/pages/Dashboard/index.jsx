import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'

const Dashboard = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);

    const trendingMovieFetcher = async () => {
        const res = await axios.get(process.env.REACT_APP_BASE_URL+"/trending/movie/week?api_key="+process.env.REACT_APP_TMDB_KEY)
        setTrendingMovies(res.data.results)
    }

    useEffect(() => {
        trendingMovieFetcher()
    }, [])

    return (
        <>
            <h1 className="text-3xl font-bold text-center mb-8 pt-5">
                Trending Movies
            </h1>
            <div className='flex flex-row gap-[30px] flex-wrap mx-auto fl-xs:max-w-[430px] fl-sm:max-w-[661px] fl-md:max-w-[895px] fl-lg:max-w-[1120px]'>
                {trendingMovies.map((movie, index) => (
                    <Card key={index} movie={movie} />
                ))}
            </div>
        </>
    )
}

export default Dashboard