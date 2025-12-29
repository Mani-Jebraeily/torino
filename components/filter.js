"use client";
import React, { useState } from 'react'
import { useContext } from 'react'
import { TourContext } from '@/pages'
import Image from 'next/image'
import calenderIcon from '@/public/calendar-filter.svg'
import originIcon from '@/public/location.svg'
import destinationIcon from '@/public/global-search.svg'
import { Calendar } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { DateObject } from "react-multi-date-picker";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import { useRouter } from 'next/navigation'
function Filter() {
    const { tours, setTours} = useContext(TourContext)
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [date, setDate] = useState();
    const [value, setValue] = useState(new DateObject());
    const [showCalender, setShowCalender] = useState(false)
    const [filterTour, setFilterTour] = useState([])
    const [showReset, setShowReset] = useState(false)

    const router = useRouter()



    const calendarHandeler = (date) => {
        setValue(date);
        if (date) {
            const gregorianDate = new DateObject(date)
                .convert(gregorian, gregorian_en)
                .format("YYYY-MM-DD");
            setDate(gregorianDate)
        }
    };

    const filterHandeler = () => {
        if (origin || destination) {
            setShowReset(true)
        }
        for (const i of tours) {
            if (origin && destination) {
                if (i.origin.name === origin && i.destination.name === destination) {
                    // setFilterTour(filterTour => [...filterTour, i])
                    // setFilterTour(i)
                    setTours(tours=>[...tours,i])

                }
            } else if (origin || destination) {
                if (i.origin.name === origin || i.destination.name === destination) {
                    setFilterTour(filterTour => [...filterTour, i])
                
                    // setFilterTour(i)
                    setTours([filterTour])
                    // setTours(tours=>[...tours,i])


                }

            }
        }
    }

    console.log({ filterTour, tours })
    return (
        <>
            <div className=' flex flex-col justify-center items-center'>
                <h2 className='font-semibold text-[28px] text-[#595959] flex gap-2 mt-5 mb-5'>
                    <span>تورینو</span>
                    برگزار کننده بهترین تور های داخلی و خارجی
                </h2>

                <div className='flex justify-between items-center box-border p-1 w-218 h-18 bg-[#FFFFFF] border border-[#00000026] rounded-[20px] '>
                    <div className='flex gap-2 bg-am ber-300  h-full pl-20'>
                        <Image src={originIcon} alt='icon origin' />
                        <select className='cursor-pointer' onChange={(e) => { setOrigin(e.target.value) }} name="origin" id="origin" >
                            <option value={""}>مبدا</option>
                            {tours&& tours.map((tour) => (
                                <option value={tour.origin.name}>{tour.origin.nameFa}</option>
                            ))}
                        </select>
                    </div>

                    <div className='flex gap-2 border-l border-r border-[#00000026] bg-amb er-200 h-full pl-20 pr-2'>
                        <Image src={destinationIcon} alt='icon destination' />
                        <select className='cursor-pointer' onChange={(e) => { setDestination(e.target.value) }} name="destination" id="destination">
                            <option value={""}>مقصد</option>
                            {tours&& tours.map((tour) => (
                                <option value={tour.destination.name}>{tour.destination.nameFa}</option>
                            ))}
                        </select>
                    </div>

                    <div className='flex items-center gap-2 bg-amber -300  h-full pl-20 cursor-pointer   relative'>
                        <Image src={calenderIcon} alt='icon calender' />
                        <button onClick={() => { setShowCalender(!showCalender) }}>تاریخ</button>
                        {showCalender && <Calendar className=' absolute top-15 left-[-70]' value={value} calendar={persian} locale={persian_fa} onChange={calendarHandeler} />}
                    </div>
                    {showReset && <button className='size-10 bg-red-400 cursor-pointer text-white rounded-full' onClick={() => { router.refresh() }}>X</button>}
                    <button onClick={filterHandeler} className='bg-[#28A745] w-47.5 h-12.75 rounded-2xl cursor-pointer text-[#FFFFFF] text-2xl '>جستجو</button>
                </div>

            </div>
        </>
    )
}

export default Filter