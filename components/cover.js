import React from 'react'
import Image from 'next/image'
import cover from '@/public/main-cover.png'

function Cover() {
    return (
        <>
            <Image src={cover} className='w-full' priority  alt='cover image'>
            </Image>
        </>
    )
}

export default Cover