import axios from 'axios'
import React, { useEffect, useState, useContext } from 'react'
import Image from 'next/image'
import { TourContext } from '@/pages'
import Link from 'next/link'

export const formatFaNumber = (value) => Number(value).toLocaleString('en-US').replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d])

function Tours() {
    const { tours } = useContext(TourContext)


    return (
        <>
            <div className='w-full flex flex-col justify-center items-center mt-25'>
                <h1 className='w-[80vw] font-normal text-5xl  mb-5'>همه تور ها</h1>
                <div className="w-[80vw] mx-auto  bg-amber-6 00 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-15">
                    {tours.map((tour) => (
                        <div key={tour.id} className='box-content size-68.5 rounded-xl border border-[#D9D9D9] shadow-lg shadow-slate-300'>
                            <img src={tour.image} alt='tour image' />
                            <h2 className=' font-medium text-2xl  p-1'>{tour.title}</h2>
                            <div className=' h-7 overflow-hidden font-normal text-[15px] text-[#282828B2] p-2 '>
                                {tour.options.map((option) => (
                                    <span key={option}>{option}| </span>
                                ))}
                            </div>
                            <div className='flex justify-between items-center p-2  h-10 w-full border-t border-[#D9D9D9]'>
                                <button className=' w-16.5 h-6.5 bg-[#28A745] rounded-sm font-normal text-[15px] text-[#FFFFFF] cursor-pointer' ><Link href={`/${tour.id}`}>رزرو</Link></button>
                                <div className='flex items-center gap-2 p-2'>
                                    <span className='font-normal text-[16px] text-[#009ECA]'>{formatFaNumber(tour.price)}</span>
                                    <span className='font-normal text-[12px]'> تومان</span>
                                </div>

                            </div>
                        </div>
                    ))
                    }
                </div>

            </div>
        </>
    )
}

export default Tours

