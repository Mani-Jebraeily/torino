import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import btn from '@/public/btnsignin.svg'
import ModalSignIn from '@/components/modules/modalSignIn'
import { useState } from 'react'
import ModalCofirmCode from './modules/modalCofirmCode'

function Header() {
    const [showSignIn, setShowSignIn] = useState(false)
    const [showOTP, setShowOTP] = useState(false)


    return (
        <>
            {showSignIn && <ModalSignIn setShowSignIn={setShowSignIn} setShowOTP={setShowOTP}/>}
            {showOTP && <ModalCofirmCode setShowOTP={setShowOTP}/>}


            <div className='pb-3  border-b border-[#00000029] flex items-center justify-center'>
                <div className=' w-[80vw] flex justify-between'>
                        <Image src={logo} />

                    <div className='w-[60%]  flex justify-center  gap-2'>
                        <ul className='*:min-w -fit  flex  items-center gap-5 *:cursor-pointer *:text-[16px] *:font-normal *: text-[#282828]'>
                            <li className='text-[#28A745]'>صفحه اصلی</li>
                            <li>خدمات گردشگری</li>
                            <li>درباره ما</li>
                            <li> تماس با ما</li>
                        </ul>
                    </div>
                    <button onClick={()=>setShowSignIn(true)} className=' cursor-pointer'>
                        <Image src={btn} />
                    </button>
                </div>

            </div>
        </>
    )
}

export default Header