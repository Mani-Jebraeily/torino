import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import btn from '@/public/btnsignin.svg'

function Header() {
    return (
        <>
            <div className='flex items-center justify-center'>
                <div className='w-[80vw] flex justify-between'>
                    <div className='flex gap-20'>
                        <Image src={logo} />
                        <ul className='flex items-center gap-15 *:cursor-pointer *:text-[16px] *:font-normal *: text-[#282828]'>
                            <li className='text-[#28A745]'>صفحه اصلی</li>
                            <li>خدمات گردشگری</li>
                            <li>درباره ما</li>
                            <li> تماس با ما</li>
                        </ul>
                    </div>
                    <button className='cursor-pointer'><Image src={btn} /></button>
                </div>

            </div>
        </>
    )
}

export default Header