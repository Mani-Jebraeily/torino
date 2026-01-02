import Header from '@/components/header'
import Image from 'next/image'
import userIcon from '@/public/userIcon.svg'
import sun from '@/public/sun-fog.svg'
import card from '@/public/convert-card.svg'
import React, { use, useState } from 'react'
import ProfilePart from '@/components/profilePart'

function Profile() {
    const [showProfile,setProfile]=useState(true)

    return (
        <>
            <Header />
            <div>
                <div className='w-71 h-42 flex flex-col border border-[#00000033] rounded-[10px] overflow-hidden'>
                    <button className='flex items-center gap-2 cursor-pointer w-full h-[170px] '>
                        <Image src={userIcon} />
                        <p>پروفایل</p>
                    </button>

                    <button className='flex items-center gap-2 cursor-pointer w-full h-[170px] border-t border-b border-[#00000033]' >
                        <Image src={sun} />
                        <p>تور های من</p>
                    </button>

                    <button className='flex items-center gap-2 cursor-pointer w-full h-[170px]'>
                        <Image src={card} />
                        <p>تراکنش ها</p>
                    </button>
                </div>
                <div>
                    {showProfile&&<ProfilePart/>}
                </div>
            </div>
        </>
    )
}

export default Profile