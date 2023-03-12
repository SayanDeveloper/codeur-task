import axios from 'axios'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import {FcPrevious} from "react-icons/fc"
import {ImEqualizer2} from "react-icons/im"
import { useNavigate } from 'react-router-dom'
import SearchResultCard from '../../components/Card/SearchResultCard'

const SearchPage = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  var filterTimeout;

  const movieSearchFn = async (term) => {
    clearTimeout(filterTimeout)
      
    filterTimeout = setTimeout(async () => {
      const res = await axios.get(process.env.REACT_APP_BASE_URL+`/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${term}&page=1`)
      console.log(res.data);
      setSearchResults(res.data.results)
    }, 300)
  }

  return (
    <div className='-mt-[50px]'>
      <div className='flex justify-between items-center mb-[20px]'>
        <div className='bg-[#262a34] p-3.5 rounded-2xl cursor-pointer' onClick={() => navigate("/")}>
          <FcPrevious color='white !important' />
        </div>
        <div className='text-center'>
          <h1 className='text-xl'>Result</h1>
          {searchQuery &&
          <p className='text-sm text-[#999]'>for "{searchQuery}"</p>
          }
        </div>
        <div className='bg-[#262a34] p-3.5 rounded-2xl cursor-pointer'>
          <ImEqualizer2 />
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='relative'>
          <input 
            value={searchQuery} 
            onChange={(e) => {
              setSearchQuery(e.target.value)
              movieSearchFn(e.target.value)
            }}
            className='rounded-xl w-[300px] py-[10px] px-4 pl-[48px] bg-[#262a34] border-slate-700 border-2 outline-0' 
            placeholder='Search movies...' />
          <div className=' p-2 absolute top-[7px] left-[14px] rounded-full'>
            <BsSearch />
          </div>
        </div>
      </div>
      <div className='max-w-[400px] mx-auto mt-[30px]'>
        {searchResults?.map((result, index) => (
          <SearchResultCard result={result} />
        ))}
      </div>
    </div>
  )
}

export default SearchPage