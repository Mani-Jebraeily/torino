import React from 'react'
import IconUserTick from '@/public/user-tick.svg'
import IconMap from '@/public/map.svg'
import { formatFaNumber } from './tours'

function TourDetails({ tour }) {
    const startDay = new Date(tour.startDate).getTime()
    const endtDay = new Date(tour.endDate).getTime()
    const totalDays = endtDay - startDay
    const msPerDay = 1000 * 60 * 60 * 24;
    const nightsCount = formatFaNumber(Math.floor(totalDays / msPerDay));
    const daysCount = formatFaNumber(Math.floor(totalDays / msPerDay) + 1);

    console.log(nightsCount)
    console.log(daysCount)

    const shamsiDate = (date) => {
        const dateFormat = new Date(date)
        return new Intl.DateTimeFormat('fa-IR').format(dateFormat);
    }
    return (
        <>
            <div className='bg-gray-100 w-full h-200 flex justify-center' >
                <div className='max-w-[80vw] w-297 h-fit  h- 107 bg-[#FFFFFF] border border-[#00000033] rounded-xl mt-10'>
                    <div className='flex bg- amber-300 box-content p-[20px_20px] overflow-hidden'>
                        <img src={tour.image} className='rounded-xl w-75 h-50' />

                        <div className='bg-red- 400 w-full h-50 p-[0px_20px] flex flex-col justify-between'>
                            <h1 className='font-bold text-[32px]'>{tour.title}</h1>
                            <h1 className='font-normal text-[20px]'>
                                {daysCount}
                                روز و
                                {nightsCount}
                                شب
                                </h1>
                            <div className='flex *:flex gap-15 *:gap-2' >
                                <span>
                                    <img src='/user-tick.svg' />
                                    <p>تور لیدر از مبدا</p>
                                </span>

                                <span>
                                    <img src='/map.svg' />
                                    <p>برنامه سفر </p>
                                </span>

                                <span>
                                    <img src='/medal-star.svg' />
                                    <p>تضمین کیفیت</p>
                                </span>
                            </div>

                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2'>
                                    <span className='font-medium text-[28px] text-[#009ECA]'>
                                        {formatFaNumber(tour.price)}

                                    </span>

                                    <span className='font-normal text-[14px] '>
                                        تومان
                                    </span>
                                </div>
                                <button className='w-50 h-14 rounded-[10px] bg-[#28A745] text-[#FFFFFF] font-normal text-2xl cursor-pointer'>رزرو و خرید</button>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center mb-10 w-full bg-amber -300 *:flex *:flex-col *:justify-center *:items-center *:border-[#00000040] *:p-[0px_30px]'>

                        <div className='border-l'>
                            <div className='flex items-center gap-2 justify-cente'>
                                <img src='/routing-2.svg' />
                                <span>مبدا</span>
                            </div>
                            <span>{tour.origin.name}</span>
                        </div>

                        <div className='border-l'>
                            <div className='flex items-center gap-2'>
                                <img src='/calendar.svg' />
                                <span>تاریخ رفت</span>
                            </div>

                            <span>{shamsiDate(tour.startDate)}</span>

                        </div>

                        <div className='border-l '>
                            <div className='flex items-center gap-2'>
                                <img src='/calendar-2.svg' />
                                <span>تاریخ برگشت</span>
                            </div>
                            <span>{shamsiDate(tour.endDate)}</span>



                        </div>

                        <div className='border-l '>
                            <div className='flex items-center gap-2'>
                                <img src='/bus.svg' />
                                <span>حمل و نقل</span>
                            </div>
                            <span>{tour.fleetVehicle}</span>




                        </div>
                        <div className='border-l '>
                            <div className='flex items-center gap-2'>
                                <img src='/profile-2user.svg' />
                                <span>ظرفیت</span>
                            </div>
                            <span>حداکثر{formatFaNumber(tour.capacity)} نفر</span>
                        </div>

                        <div className=' '>
                            <div className='flex items-center gap-2'>
                                <img src='/security.svg' />
                                <span>بیمه</span>
                            </div>
                            <span>بیمه ۵۰ هزار دیناری</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TourDetails