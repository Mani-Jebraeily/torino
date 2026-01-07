import React from 'react'
import Header from '@/components/header'
import { useState } from 'react'
import ProfilePart from '@/components/profilePart'
import Profilebuttons from '@/components/profilebuttons'
import ToursPartProfile from '../toursPartProfile'

function ProfileTemplate() {
        const [showProfile, setProfile] = useState(true)
        const [showMyTours, setShowMyTours] = useState(false)
        const [showMyTransaction, setShowMyTransaction] = useState(false)
    
    return (
        <>
            <Header />
            <div className='w-full flex justify-center mt-10'>
                <div className='flex justify-between items-start w-[80vw]'>
                    <Profilebuttons showProfile={showProfile} showMyTours={showMyTours} showMyTransaction={showMyTransaction} setProfile={setProfile} setShowMyTours={setShowMyTours} setShowMyTransaction={setShowMyTransaction}/>
                    {showProfile && <ProfilePart />}
                    {showMyTours && <ToursPartProfile/>}
                </div>
            </div>
        </>
    )
}

export default ProfileTemplate