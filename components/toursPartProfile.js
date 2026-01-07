import React from 'react'
import sunIcon from '@/public/sun-fog.svg'
import bus from '@/public/bus.svg'
import Image from 'next/image'

function ToursPartProfile() {
    return (
        <div className='flex justify-center w-[872px] h-140 rounded-[10px] border border-[#00000033]'>
            <div className='flex flex-col  justify-around w-[832px] h-[168px] rounded-[10px] border border-[#00000033] mt-5 '>
                <div className='flex justify-between p-3'>
                    <span className='flex items-center gap-2'>
                        <Image src={sunIcon} alt='icon' />
                        <h2 className='font-normal text-[14px] text-[#000000]'>تور اقلیم کردستان</h2>
                    </span>

                    <span className='flex items-center gap-2'>
                        <Image src={bus} alt="icon" />
                        <h2 className='font-normal text-[14px] text-[#000000]'>سفر با اتوبوس</h2>
                    </span>

                    <span className='flex justify-center items-center bg-[#28A7454D] font-normal text-[12px] text-[#28A745] rounded-[27px] w-[90px] '>
                        به اتمام رسیده
                    </span>
                </div>

                <div className='flex gap-10 pr-3'>
                    <span className='flex items-center gap-3'>
                        <h3 className='font-semibold text-[14px] text-[#000000]'>تهران به سلیمانیه :</h3>
                        <p className='font-normal text-[14px] text-[#00000099]'>دوشنبه ۱۵ شهریور ۱۴۰۲</p>
                    </span>

                    <span className='flex items-center gap-3'>
                        <h3 className='font-semibold text-[14px] text-[#000000]'>تاریخ برگشت</h3>
                        <p className='font-normal text-[14px] text-[#00000099]'>دوشنبه ۱۵ شهریور ۱۴۰۲</p>
                    </span>
                </div>

                <div className='flex gap-35 pr-3'>
                    <span className='flex items-center gap-3'>
                        <h3 className='font-normal text-[14px] text-[#00000080]'> شماره تور</h3>
                        <p className='font-medium text-[14px] text-[#282828]'>۱۰۲۰۹۵۴۰۴</p>
                    </span>

                    <span className='flex items-center gap-2 '>
                        <h3 className='font-normal text-[14px] text-[#00000080]'>مبلغ پرداخت شده</h3>
                        <span className='flex items-center gap-1'>
                            <p className='font-medium text-[14px] text-[#282828]'>۱۸۰۰۰۰۰</p>
                            <p className='font-light text-[10px] text-[#00000080]'>تومان</p>
                        </span>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default ToursPartProfile