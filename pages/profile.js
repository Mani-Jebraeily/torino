import Header from '@/components/header'
import Image from 'next/image'
import userIcon from '@/public/userIcon.svg'
import sun from '@/public/sun-fog.svg'
import card from '@/public/convert-card.svg'
import React, { use } from 'react'

function Profile() {
    return (
        <>
            <Header />
            <div>
                <div className='w-71 h-42 flex flex-col border border-[#00000033] rounded-[10px]'>
                    <button className='flex'>
                        <Image src={userIcon} />
                        <p>پروفایل</p>
                    </button>

                    <button className='flex'>
                        <Image src={sun} />
                        <p>تور های من</p>
                    </button>

                    <button className='flex'>
                        <Image src={card} />
                        <p>تراکنش ها</p>
                    </button>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default Profile