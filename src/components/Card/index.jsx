import React from 'react'

const Card = () => {
    return (
        <div className='w-[calc(50vw-35px)] xs:w-[calc(50vw-55px)] fl-xs:w-[200px] '>
            <img src="https://image.tmdb.org/t/p/original/rVdd23QuT5rHX7lZvuAkRRUkeCZ.jpg" className='h-[auto] fl-xs:h-[300px] object-cover rounded-[20px] mb-[8px]' />
            <p className='text-center'>Three Colors Collection lorem </p>
            <div className='flex flex-row justify-center items-center gap-[10px] text-[#6f7075] text-sm mt-[2px]'>
                <p>Movie</p>
                <div className='rounded-[50%] bg-[#6f7075] h-[5px] w-[5px]'></div>
                <p>2020</p>
            </div>
        </div>
    )
}

export default Card