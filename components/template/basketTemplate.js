import React, { useState } from 'react'
import Header from '../header'
import userIcon from '@/public/frame.svg'
import Image from 'next/image'
import { useEffect } from 'react'
import axios from 'axios'
import { getCookie } from 'cookies-next'
import { formatFaNumber } from '../tours'
import Link from 'next/link'



function BasketTemplate() {
    const api = process.env.NEXT_PUBLIC_API_URL
    const [data, setData] = useState()
    const [day, setDay] = useState()
    const [night, setnight] = useState()
    const [fullName, setFullName] = useState()
    const [nationalCode, setNationalCode] = useState()
    const [gender, setGender] = useState()
    const [birthDate, setBirthDate] = useState()
    useEffect(() => {
        const fetchData = async () => {
            const token = await getCookie("accesToken");
            if (token) {
                axios.get(`${api}/basket`, { headers: { Authorization: `Bearer ${token}` } })
                    .then((res) => {
                        setData(res.data)
                        const startDay = new Date(res.data.startDate).getTime()
                        const endtDay = new Date(res.data.endDate).getTime()
                        const totalDays = endtDay - startDay
                        const msPerDay = 1000 * 60 * 60 * 24;
                        setDay(formatFaNumber(Math.floor(totalDays / msPerDay)))
                        setnight(formatFaNumber(Math.floor(totalDays / msPerDay) + 1))
                    })

            };
        };

        fetchData();
    }, [])

    const  buyHandeler =() => {
            const token = getCookie("accesToken");

        if (fullName && nationalCode && gender && birthDate) {
            axios.post(`${api}/order`, { nationalCode, fullName, gender, birthDate },
                 { headers: { Authorization: `Bearer ${token}` } }
                ).then((res)=>console.log(res))

        } else {
            alert("تمام فیلد هارو پر کنید")
        }
    }

    return (
        <>
            <Header />

            {data ?
                <div className='w-full flex justify-center' >
                    <div className='w-[80vw]'>
                        <div className='flex justify-center gap-5'>
                            <div className='w-216 h-57 p-5 mt-10 border border-[#00000033] bg-white  rounded-[10px]'>
                                <div className='flex  items-center gap-3 mb-3 pr-2'>
                                    <Image src={userIcon} alt='user Icon' />
                                    <h2 className='font-normal text-[24px] text-[#000000]'>مشخصات مسافر</h2>
                                </div>
                                <div className='flex flex-wrap pr-2 gap-5 *:w-63.75 *:h-11.25 *:rounded-[5px] *:border *:border-[#00000080]/50 *:font-normal *:text-[#00000080] *:text-[14px] *:pr-3'>
                                    <input onChange={(e) => setFullName(e.target.value)} type='text' placeholder='نام و نام خانوادگی' />
                                    <input onChange={(e) => setNationalCode(e.target.value)} type='text' placeholder='کدملی' />
                                    <input onChange={(e) => setBirthDate(e.target.value)} type='text' placeholder='تاریخ تولد' />
                                    <select onChange={(e) => setGender(e.target.value)} name="destination" id="destination" >
                                        <option value={""} selected>جنسیت</option>
                                        <option value={"male"}>آقا</option>
                                        <option value={"femail"}>خانم</option>
                                    </select>
                                </div>
                            </div>
                            <div className=' flex flex-col gap-3 justify-center items-center w-77 h-57 mt-10 border border-[#00000033] rounded-[10px] bg-hite'>
                                <div className='w-full flex items-center justify-around  p-5 border-b  border-dashed border-[#00000080]/50'>
                                    <h1 className=' font-semibold text-[24px] text-[#000000]'>
                                        {data.title}
                                    </h1>
                                    <span className='font-normal text-[16px]  text-[#282828]'>
                                        {day}
                                        روز
                                        و
                                        {night}
                                        شب
                                    </span>
                                </div>
                                <div className='w-full flex items-center justify-around'>
                                    <span className='font-normal text-[16px] text-[#282828]'>
                                        قیمت نهایی
                                    </span>
                                    <span className=' flex items-center gap-2 font-medium  text-[28px] text-[#009ECA]'>
                                        {formatFaNumber(data.price)}

                                        <span className='font-normal text-[14px] text-[#282828CC]/80'>
                                            تومان
                                        </span>
                                    </span>
                                </div>
                                <button onClick={buyHandeler} className='w-[283px] h-[56px] rounded-[10px] bg-[#28A745] font-normal text-2xl text-white cursor-pointer'>
                                    ثبت و خرید نهایی
                                </button>

                            </div>
                        </div>


                    </div>

                </div>

                :
                <div className='flex flex-col gap-10 mt-20 justify-center items-center'>
                    <h1 className='font-semibold text-[36px] text-[#282828]'>
                        سبد خرید شما خالی است !
                    </h1>
                    <Link href="/">
                        <button className='w-90 h-19 rounded-2xl bg-[#D8FFE1] font-semibold text-[28px] text-[#28A745] cursor-pointer'>
                            بازگشت به صفحه  اصلی
                        </button>
                    </Link>
                </div>}



        </>
    )
}

export default BasketTemplate