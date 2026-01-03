import React from 'react'
import Header from '@/components/header'
import { useState } from 'react'
import ProfilePart from '@/components/profilePart'
import Profilebuttons from '@/components/profilebuttons'

function ProfileTemplate() {
        const [showProfile, setProfile] = useState(true)
    
    return (
        <>
            <Header />
            <div className='w-full flex justify-center mt-10'>
                <div className='flex justify-between items-start w-[80vw]'>
                    <Profilebuttons />
                    {showProfile && <ProfilePart />}
                </div>
            </div>
        </>
    )
}

export default ProfileTemplate