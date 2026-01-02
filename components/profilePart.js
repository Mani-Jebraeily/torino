import React from 'react'
import { useState,useEffect } from 'react'
import { getCookie } from 'cookies-next' 


function Profile() {
    const [phoneProfile, setPhoneProfile] = useState(null)
    useEffect(() => {
        setPhoneProfile(getCookie("phoneNumber"))
    }, [])
    return (

        <div>
            <div>
                <div className='w-[872px] h-[115px] rounded-[10px] border border-[#00000033] '>
                    <h1 className='font-normal text-[16px]'>اطلاعات حساب کاربری</h1>
                    <div className='flex items-center justify-around'>
                        <div className='flex gap-2 *:font-normal *:text-[14px]'>
                            <h2>شماره موبایل </h2>
                            <h2>{phoneProfile}</h2>
                        </div>
                        <div>
                            <input className='w-[255px] h-[45px] rounded-[5px] border border-[#00000080] font-normal text-[#00000080] text-[14px] ' type='email' placeholder='آدرس ایمیل'/>
                            <button className='w-[122px] h-[45px] rounded-[5px] bg-[#28A745] text-[16px] font-semibold text-[#FFFFFF] cursor-pointer'>تایید</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile