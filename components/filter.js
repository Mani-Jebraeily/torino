import React, { useState } from 'react'
import { useContext } from 'react'
import { TourContext } from '@/pages'
import Image from 'next/image'
import calenderIcon from '@/public/calendar-filter.svg'
import originIcon from '@/public/location.svg'
import destinationIcon from '@/public/global-search.svg'

import farvardin from '@/farvardin'

// import DatePicker from "react-multi-date-picker";
// import { Calendar } from "react-multi-date-picker"
// import farsiCalendar from "react-date-object/calendars/persian"

import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"


import DatePicker from "react-multi-date-picker"
// import persian from "react-date-object/calendars/persian"
import persian_en from "react-date-object/locales/persian_fa"





function Filter() {
    const { tours } = useContext(TourContext)
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [date, setDate] = useState();
    // const [year,month,day]=date.split("/")
    // const text = "۱۳۴۲/۲/۱"
    // const [year, month, day] = text.split("/")
    // console.log(year, month, day)

    // console.log(farvardin.solarToGregorian(year, month,day))
    console.log(date)

    return (
        <>
            <DatePicker
                value={date}
                onChange={setDate}

                calendar={persian}
                locale={persian_en}
                calendarPosition="bottom-right"
            />

            {/* <Calendar
                value={date}
                calendar={persian}
                locale={persian_fa}
                onChange={setDate}
            /> */}

            <div className=' flex flex-col justify-center items-center'>
                <h2 className='font-semibold text-[28px] text-[#595959] flex gap-2 mt-5 mb-5'>
                    <span>تورینو</span>
                    برگزار کننده بهترین تور های داخلی و خارجی
                </h2>

                <div className='flex justify-between items-center box-border p-1 w-218 h-18 bg-[#FFFFFF] border border-[#00000026] rounded-[20px] '>
                    <div className='flex gap-2 bg-am ber-300  h-full pl-20'>
                        <Image src={originIcon} alt='icon origin' />
                        <select onChange={(e) => { setOrigin(e.target.value) }} name="origin" id="origin" >
                            <option value={""}>مبدا</option>
                            {tours.map((tour) => (
                                <option value={tour.origin.name}>{tour.origin.nameFa}</option>
                            ))}
                        </select>
                    </div>

                    <div className='flex gap-2 border-l border-r border-[#00000026] bg-amb er-200 h-full pl-20 pr-2'>
                        <Image src={destinationIcon} alt='icon destination' />
                        <select onChange={(e) => { setDestination(e.target.value) }} name="destination" id="destination">
                            <option value={""}>مقصد</option>
                            {tours.map((tour) => (
                                <option value={tour.destination.name}>{tour.destination.nameFa}</option>
                            ))}
                        </select>
                    </div>

                    <div className='flex items-center gap-2 bg-amber -300  h-full pl-20'>
                        <Image src={calenderIcon} alt='icon calender' />
                        <p>تاریخ</p>
                    </div>
                    <button className='bg-[#28A745] w-47.5 h-12.75 rounded-2xl cursor-pointer text-[#FFFFFF] text-2xl '>جستجو</button>
                </div>

            </div>
        </>
    )
}

export default Filter