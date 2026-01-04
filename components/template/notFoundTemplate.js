import React from 'react'
import img from '@/public/404.svg'
import Image from 'next/image'
import Header from '../header'

function NotFoundTemplate() {
    return (
        <>
        <Header/>
            <div className='flex items-center justify-center'>
                <div className='w-[80vw] flex justify-between '>
                    <div className='w-[50%] flex flex-col gap-5 justify-center items-center' >
                        <h1 className='font-semibold text-4xl '>اتصال با سرور برقرار نیست!</h1>
                        <h2 className='font-semibold text-2xl text-[#282828]'>لطفا بعدا دوباره امتحان کنید.</h2>
                    </div>
                    <Image src={img} alt='404 image' className='w-[50%]' />
                </div>
            </div>

        </>

    )
}

export default NotFoundTemplate