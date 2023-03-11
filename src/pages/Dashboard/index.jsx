import React from 'react'
import Card from '../../components/Card'

const Dashboard = () => {
  return (
    <>
        <h1 className="text-3xl font-bold text-center mb-8 pt-5">
            Trending Movies
        </h1>
        <div className='flex flex-row gap-[30px] flex-wrap mx-auto fl-xs:max-w-[430px] fl-sm:max-w-[661px] fl-md:max-w-[895px] fl-lg:max-w-[1120px]'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </>
  )
}

export default Dashboard