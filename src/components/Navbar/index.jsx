import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {BsSearch} from "react-icons/bs"

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  console.log(location.pathname)

  if (location.pathname === "/search") return <></>

  return (
    <div className='w-screen h-[70px] bg-[#183350]/[0.6] backdrop-blur-[10px] fixed top-0 left-0 z-20 flex justify-center items-center'>
      <div className='cursor-pointer relative' onClick={() => navigate("/search")}>
        <div className='rounded-xl h-[45px] disabled w-[300px] py-[10px] px-4 pl-[48px] bg-[#262a34] border-slate-700 border-2 cursor-pointer'  >
          Search Movies...
        </div>
        <div className=' p-2 absolute top-[7px] left-[14px] rounded-full'>
          <BsSearch />
        </div>
      </div>
    </div>
  )
}

export default Navbar