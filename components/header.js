import React, { useEffect } from 'react'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import userIcon from '@/public/userIcon.svg'
import arrowDown from '@/public/arrow-down.svg'
import ModalSignIn from '@/components/modules/modalSignIn'
import { useState } from 'react'
import ModalCofirmCode from './modules/modalCofirmCode'
import { getCookie } from 'cookies-next'
import ModalProfile from './modules/modalProfile'
import Link from 'next/link'

function Header() {
    // const token = getCookie("token")
    // const phoneProfile = getCookie('phoneNumber')
    const [token, setToken] = useState(null)
    const [phoneProfile, setPhoneProfile] = useState(null)
    const [phoneNumber, setPhoneNumber] = useState("")
    const [showSignIn, setShowSignIn] = useState(false)
    const [showOTP, setShowOTP] = useState(false)
    const [showModalProfile, setShowModalProfile] = useState(false)
    // console.log(token, 99)


    useEffect(() => {
        setToken(getCookie("refreshToken"))
        setPhoneProfile(getCookie("phoneNumber"))
    }, [])

    return (
        <>
            {showSignIn && <ModalSignIn phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} setShowSignIn={setShowSignIn} setShowOTP={setShowOTP} />}
            {showOTP && <ModalCofirmCode setShowOTP={setShowOTP} phoneNumber={phoneNumber} />}


            <div className='pb-3  border-b border-[#00000029] flex items-center justify-center'>
                <div className=' w-[80vw] flex justify-between'>
                    <Link href='/'>  <Image src={logo} alt='logo' /></Link>

                    <div className='w-[60%]  flex justify-center  gap-2'>
                        <ul className='*:min-w -fit  flex  items-center gap-5 *:cursor-pointer *:text-[16px] *:font-normal *: text-[#282828]'>
                            <Link href='/'><li className='text-[#28A745]'>صفحه اصلی</li></Link>
                            <Link href='/'><li>خدمات گردشگری</li></Link>
                            <Link href='/'><li>درباره ما</li></Link>
                            <Link href='/'><li> تماس با ما</li></Link>
                        </ul>
                    </div>
                    {token ?
                        <div onClick={() => setShowModalProfile(!showModalProfile)} className=' relative flex items-center justify-center cursor-pointer w-41.5 h-11 border-2 border-[#28A745] rounded-lg'>
                            <Image src={userIcon} alt='user Icon' />
                            <p className='font-medium text-[18px text-[#28A745]'>
                                {phoneProfile}
                            </p>
                            <Image src={arrowDown} alt='arrow icon' />
                            {showModalProfile &&
                                <ModalProfile />
                            }

                        </div>

                        :
                        <button onClick={() => setShowSignIn(true)} className=' flex items-center justify-center cursor-pointer w-41.5 h-11 border-2 border-[#28A745] rounded-lg'>
                            <Image src={userIcon} alt='user icon' />
                            <p className='font-medium text-[18px] text-[#28A745]'>
                                ورود | ثبت نام
                            </p>
                        </button>

                    }


                </div>

            </div>
        </>
    )
}

export default Header