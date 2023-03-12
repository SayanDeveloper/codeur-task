import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const Review = ({review}) => {
    return (
        <div className='w-full mb-[30px]'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 mb-[10px]'>
                    <img src={`https://image.tmdb.org/t/p/original/${review?.author_details?.avatar_path}`} className='rounded-full w-[50px] h-[50px]' />
                    <div>
                        <p className='font-semibold'>
                            {review.author}
                        </p>
                        <p className='text-sm text-[#aaa]'>
                            @{review?.author_details?.username}
                        </p>
                    </div>
                </div>
                <div className='px-5 py-2 bg-[#262a34] rounded-full flex items-center gap-1'>
                    <AiFillStar color='#ffc400' className='text-sm' style={{position: "relative", top: "1px"}} /> 
                    <p className='text-sm'>
                        {review?.author_details?.rating || 0}
                    </p>
                </div>
            </div>
            <div className='text-sm'>
                {review?.content}
            </div>
        </div>
    )
}

export default Review