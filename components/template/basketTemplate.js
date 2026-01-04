import React from 'react'
import Header from '../header'
import userIcon from '@/public/frame.svg'
import Image from 'next/image'

function BasketTemplate() {
    return (
        <>
            <Header />

            <div className='w-full flex justify-center' >
                <div className='w-[80vw]'>
                    <div className='flex justify-center gap-5'>
                        <div className='w-216 h-57 p-5 mt-10 border border-[#00000033] bg-white  rounded-[10px]'>
                            <div className='flex  items-center gap-3 mb-3 pr-2'>
                                <Image src={userIcon} alt='user Icon' />
                                <h2 className='font-normal text-[24px] text-[#000000]'>مشخصات مسافر</h2>
                            </div>
                            <div className='flex flex-wrap pr-2 gap-5 *:w-63.75 *:h-11.25 *:rounded-[5px] *:border *:border-[#00000080]/50 *:font-normal *:text-[#00000080] *:text-[14px] *:pr-3'>
                                <input type='email' placeholder='نام و نام خانوادگی' />
                                <input type='email' placeholder='کدملی' />
                                <input type='email' placeholder='تاریخ تولد' />
                                <select name="destination" id="destination">
                                    <option value={""} selected>جنسیت</option>
                                    <option value={"male"}>آقا</option>
                                    <option value={"femail"}>خانم</option>
                                </select>
                            </div>
                        </div>
                        <div className=' flex flex-col gap-3 justify-center items-center w-77 h-57 mt-10 border border-[#00000033] rounded-[10px] bg-hite'>
                            <div className='w-full flex items-center justify-around  p-5 border-b  border-dashed border-[#00000080]/50'>
                                <h1 className=' font-semibold text-[24px] text-[#000000]'>تور هولیر </h1>
                                <span className='font-normal text-[16px]  text-[#282828]'>
                                    ۵
                                    روز
                                    و
                                    ۴
                                    شب
                                </span>
                            </div>
                            <div className='w-full flex items-center justify-around'>
                                <span className='font-normal text-[16px] text-[#282828]'>
                                    قیمت نهایی
                                </span>
                                <span className='font-medium text-[28px] text-[#009ECA]'>
                                    ۱۷.۷۰۰.۰۰
                                    <span className='font-normal text-[14px] text-[#282828CC]/80'>
                                        تومان
                                    </span>
                                </span>
                            </div>
                            <button className='w-[283px] h-[56px] rounded-[10px] bg-[#28A745] font-normal text-2xl text-white cursor-pointer'>
                                ثبت و خرید نهایی
                            </button>

                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}

export default BasketTemplate