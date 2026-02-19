import Image from 'next/image'
import React from 'react'
import person from "@/public/person.svg"
import pic1 from "@/public/1.png"
import pic2 from "@/public/2.png"
import pic3 from "@/public/3.png"
import pic4 from "@/public/4.png"

function Information() {
    return (
        <>
            <div className='flex flex-col items-center justify-center mt-30 mb-40  '>
                <div className='w-screen sm:w-[80vw] flex flex-col  lg:flex-row h-62.5 border border-[#00000040] rounded-[10px]'>
                    <div className='w-full lg:w-[75%] h-62.5 bg-[#28A745] rounded-[10px_10px_0px_0px] lg:rounded-[10px] relative flex box-content'>
                        <Image alt='person picture' src={person} className='absolute bottom-0 left-0 w-47 sm:w-62 lg:w-75' />
                        <div className='flex flex-col justify-center items-center pr-5'>
                            <h3 className='font-extrabold sm:text-[40px] text-[#FFFFFF]'>خرید تلفنی از <span className='text-[#10411B]'>تورینو</span></h3>
                            <h4 className='text-[#FFFFFF] font-normal text-[26px]'>به هر کجا که میخواهید !</h4>
                        </div>
                    </div>
                    <div className='w-full lg:w-[25%] h-62.5 flex flex-col justify-center items-center '>
                        <span className='flex justify-center items-center'>
                            <p className='font-bold text-[26px]  '>۰۲۱-۱۸۴۰</p>
                            <img src='/call.svg' className='size-[24px]' />
                        </span>
                        <button className='w-43 h-10 bg-[#10411B] rounded-[10px] text-[#FFFFFF] cursor-pointer'>
                            اطلاعات بیشتر
                        </button>
                    </div>
                </div>

                <div className='flex lg:flex-row flex-col  items-center w-[80vw] justify-around  h-140 mt-50 '>
                    <div className='w-fit h-fit sm:w-full md:w-130 '>
                        <h2 className='font-extrabold text-[40px] pt-5 pb-5'>چرا <span className='text-[#28A745]'>تورینو</span>؟</h2>
                        <h4 className='font-medium text-2xl  pb-5'>تور طبیعت گردی و تاریخی</h4>
                        <p className='font-normal text-[20px] w-fit sm: md:w- 1 30 leading-10 '>
                            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی را خریداری کنید.
                        </p>
                    </div>
                    <div className='xl:flex items-center relative hidden   w-[50vw]'>
                        <Image src={pic1} alt='tours picture' className=' absolute left-0 ' />
                        <Image src={pic2} alt='tours picture' className=' absolute left-10' />
                        <Image src={pic3} alt='tours picture' className=' absolute left-20' />
                        <Image src={pic4} alt='tours picture' className=' absolute left-30' />
                    </div>
                </div>

                <div className='flex justify-center border-t border-[#00000033] w-full pt-10 '>
                    <div className='flex gap-15 sm:gap-5 flex-col lg:flex-row items-center justify-around w-[80vw]'>

                        <div className='flex flex-col sm:flex-row items-center gap-3'>
                            <img src='/information1.svg' alt='information icon' />
                            <span className='text-center sm:text-right'>
                                <h2 className='font-medium text-[26px]'>بصرفه ترین قیمت</h2>
                                <p className='font-light  text-[16px]'>
                                    بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
                                </p>
                            </span>
                        </div>

                        <div className='flex flex-col sm:flex-row items-center  gap-3'>
                            <img src='/information2.svg' alt='information icon'/>
                            <span className='text-center sm:text-right'>
                                <h2 className='font-medium text-[26px]'>پشتیبانی</h2>
                                <p className='font-light text-[16px]'>
                                    پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.
                                </p>
                            </span>
                        </div>

                        <div className='flex flex-col sm:flex-row items-center  gap-3'>
                            <img src='/information3.svg' alt='information icon'/>
                            <span className='text-center sm:text-right'>
                                <h2 className='font-medium text-[26px]'>رضایت کاربران</h2>
                                <p className='font-light text-[16px]'>
                                    رضایت بیش از 10هزار کاربر از تور های ما.
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Information