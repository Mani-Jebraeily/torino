import React from 'react'
import Image from 'next/image'
import cover from '@/public/main-cover.png'

function Cover() {
    return (
        <>
            <Image src={cover}>
            </Image>
        </>
    )
}

export default Cover