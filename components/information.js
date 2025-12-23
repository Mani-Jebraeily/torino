import Image from 'next/image'
import React from 'react'
import person from "@/public/person.svg"

function Information() {
    return (
        <>
            <div className='flex justify-center mt-30 mb-40'>
                <div className='w-[80vw] flex h-62.5 border border-[#00000040] rounded-[10px]'>
                    <div className='w-[75%] h-62.5 bg-[#28A745] rounded-[10px] relative flex box-content'>
                        <Image src={person} className='absolute bottom-0 left-0' />
                        <div className='flex flex-col justify-center items-center pr-5'>
                            <h3 className='font-extrabold text-[40px] text-[#FFFFFF]'>خرید تلفنی از <span className='text-[#10411B]'>تورینو</span></h3>
                            <h4 className='text-[#FFFFFF] font-normal text-[26px]'>به هر کجا که میخواهید !</h4>
                        </div>
                    </div>
                    <div className='w-[25%] h-62.5 flex flex-col justify-center items-center'>
                        <span className='flex justify-center items-center'>
                            <p className='font-bold text-[26px]  '>۰۲۱-۱۸۴۰</p>
                            <img src='/call.svg' className='size-[24px]'/>
                        </span>

                        <button className='w-43 h-10 bg-[#10411B] rounded-[10px] text-[#FFFFFF] cursor-pointer'>
                            اطلاعات بیشتر
                        </button>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Information