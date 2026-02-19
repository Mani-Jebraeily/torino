import React from 'react'
import callIcon from '@/public/call.svg'
import routing from '@/public/routing-2.svg'
import home from '@/public/homeIcon.svg'
import about from '@/public/profile-2user.svg'
import Image from 'next/image'

function ModalHamburgerMenu({ setShowModalHamburgerMenu }) {
    return (
        <>
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-1">

            <div className=' absolute top-0 right-0 flex flex-col justify-top  gap-4 w-[50vw] h-screen bg-[#FFFFFF] rounded-[11px] '>
                <div className='flex justify-end p-2'>
                    <button onClick={() => { setShowModalHamburgerMenu(false) }} className='size-8 text-white text-2xl rounded-full font-black bg-red-400 cursor-pointer '>
                        X
                    </button>

                </div>

                <div className='flex gap-2 cursor-pointer pr-4'>
                    <ul className='flex flex-col gap-4'>
                        <li className='flex gap-2 hover:text-green-600 '>
                            <Image src={home} className='size-4 ' />
                            صفحه اصلی
                        </li>

                        <li className='flex gap-2 hover:text-green-600'>
                            <Image src={routing} />
                            خدمات گردشگری
                        </li>

                        <li className='flex gap-2 hover:text-green-600'>
                            <Image src={about} />
                            درباره ما
                        </li>

                        <li className='flex gap-2 hover:text-green-600'>
                            <Image src={callIcon} />
                            تماس با ما
                        </li>
                    </ul>
                </div>


            </div>

            </div>




 
        </>




    )
}

export default ModalHamburgerMenu