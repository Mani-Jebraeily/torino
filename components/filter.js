import React from 'react'
import { useContext } from 'react'
import { TourContext } from '@/pages'
function Filter() {
    const {tours}=useContext(TourContext)
    console.log(tours)
    return (
        <>
            <div className=' flex flex-col justify-center bg-amber-50'>
                <h2 className='font-semibold text-[28px] text-[#595959] flex gap-2'>
                    <span>تورینو</span>
                    برگزار کننده بهترین تور های داخلی و خارجی
                </h2>

                <div className='w-218 h-18'>

                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>

                    <button className='bg-[#28A745] w-47.5 h-12.75 rounded-2xl cursor-pointer text-[#FFFFFF] text-2xl '>جستجو</button>
                </div>

            </div>
        </>
    )
}

export default Filter