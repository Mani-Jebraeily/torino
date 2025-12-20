import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import { TourContext } from '@/pages'

function Tours() {
    const { tours } = useContext(TourContext)
    return (
        <>
            <div className='w-full flex justify-center'>
                <div className=' w-[80vw] font-normal text-3xl text-[#000000]'>
                    <h1>همه تور ها</h1>
                    {tours.map((tour)=>{
                        console.log(tour)
                    })
                    }

                    <div className=' bg-amber-400 size-68.5 rounded-xl'>

                    </div>


                </div>


            </div>
        </>
    )
}

export default Tours

