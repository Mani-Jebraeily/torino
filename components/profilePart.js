import React from 'react'
import { useState, useEffect } from 'react'
import { getCookie } from 'cookies-next'


function Profile() {
    const [phoneProfile, setPhoneProfile] = useState(null)
    useEffect(() => {
        setPhoneProfile(getCookie("phoneNumber"))
    }, [])
    return (

        <div>
            <div>
                <div className='w-[872px] h-[115px] rounded-[10px] border border-[#00000033] mb-10 '>
                    <h1 className='font-normal text-[16px] p-3'>اطلاعات حساب کاربری</h1>
                    <div className='flex items-center justify-around'>
                        <div className='flex gap-5 *:font-normal *:text-[14px]'>
                            <h2>شماره موبایل </h2>
                            <h2>{phoneProfile}</h2>
                        </div>
                        <div className='flex gap-5 '>
                            <input className='w-[255px] h-[45px] rounded-[5px] border border-[#00000080] font-normal text-[#00000080] text-[14px] pr-3' type='email' placeholder='آدرس ایمیل' />
                            <button className='w-[122px] h-[45px] rounded-[5px] bg-[#28A745] text-[16px] font-semibold text-[#FFFFFF] cursor-pointer'>تایید</button>
                        </div>
                    </div>
                </div>

                <div className='w-[872px] h-[240px] rounded-[10px] border border-[#00000033] '>
                    <h1 className='font-normal text-[16px] p-3'>اطلاعات شخصی</h1>
                    <div className='flex items-center justify-around'>

                        <div className='flex flex-wrap gap-5 '>
                            <input className='w-[255px] h-[45px] rounded-[5px] border border-[#00000080] font-normal text-[#00000080] text-[14px] pr-3' type='email' placeholder='نام و نام خانوادگی' />
                            <input className='w-[255px] h-[45px] rounded-[5px] border border-[#00000080] font-normal text-[#00000080] text-[14px] pr-3' type='email' placeholder='کدملی' />
                            <input className='w-[255px] h-[45px] rounded-[5px] border border-[#00000080] font-normal text-[#00000080] text-[14px] pr-3' type='email' placeholder='تاریخ تولد' />
                            <select className='w-[255px] h-[45px] rounded-[5px] border border-[#00000080] font-normal text-[#00000080] text-[14px] pr-3' name="destination" id="destination">
                                <option value={""} selected>جنسیت</option>
                                <option value={"male"}>آقا</option>
                                <option value={"femail"}>خانم</option>
                            </select>
                            <div className='w-full overflow-hidden border-t border-[#00000033]'>
                                  <div className='flex items-sta ml-20  gap-3 items-center justify-end  h-15'>
                                    <button className='w-36 h-10 rounded-[5px] bg-[#28A745] font-semibold text-[16px] text-white cursor-pointer '>تایید</button>
                                    <button className='w-36 h-10 rounded-[5px] border-2 border-[#28A745]  font-semibold text-[16px] text-[#28A745] cursor-pointer '>انصراف</button>
                                  </div>
                            </div>

                        </div>
                    </div>
                </div>



            </div>
        </div>

    )
}

export default Profile