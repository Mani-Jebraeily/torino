import Image from 'next/image'
import React from 'react'
import logo from '@/public/logo.svg'
import logo1 from '@/public/logo1.svg'
import logo2 from '@/public/logo2.svg'
import barcode1 from '@/public/barcode.svg'
import barcode2 from '@/public/barcode2.svg'
import logo3 from '@/public/logo3.svg'



function Footer() {
    return (
        <>
            <div className='flex items-center justify-center   w-full'>
                <div className='pb-5 pt-5 w-[80vw] gap-5 flex flex-col sm:flex-row bg-amber800 justify-between  border-t relative bottom-0 border-[#00000033]'>
                    <div className='w-full sm:w-[30%] flex  gap-5 sm:gap-0 justify-between items-center  ' >
                        <ul className=' min-w-fit flex flex-col gap-1 *:cursor-pointer  *:font-normal text-[18px]   text-[#282828]'>
                            <li className=' font-semibold cursor-default text-2xl text-[#282828] mb-5'>تورینو</li>
                            <li>درباره ما</li>
                            <li>تماس با ما</li>
                            <li>چرا تورینو</li>
                            <li>بیمه مسافرتی</li>
                        </ul>

                        <ul className=' min-w-fit flex flex-col gap-1 *:cursor-pointer  *:font-normal text-[18px]  text-[#282828]'>
                            <li className='font-semibold cursor-default text-2xl text-[#282828] mb-5'>خدمات مشتریان</li>
                            <li>پشتیبانی آنلاین</li>
                            <li>راهنمای خرید</li>
                            <li> راهنمای استرداد</li>
                            <li>پرسش و پاسخ</li>
                        </ul>
                    </div>

                    <div className='w-full sm:w-[70%] flex justify-between flex-row-reverse sm:flex-col bg-blue -400'>
                        <div className=' h-[50%] felx items-center gap-10'>
                            <div className=' flex flex-col gap-5 items-end '>
                                <Image src={logo} />
                                <span className='font-normal text-[15px] text-[#000000]'>تلفن پشتیبانی: ۰۲۱۸۵۷۶</span>
                            </div>

                        </div>

                        <div className=' *:min -w-10 *:w-[6vw] *:cursor-pointer flex w-40 sm:w-full bg-ambe r-500 flex-wrap gap-10 h-[50%] flex-row-reverse items-center start '>
                            <Image src={logo1} />
                            <Image src={logo2} />
                            <Image src={barcode1} />
                            <Image src={barcode2} />
                            <Image src={logo3} />
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer