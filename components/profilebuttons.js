import React from 'react'
import Image from 'next/image'
import profile from '@/public/profile.svg'
import sun from '@/public/sun-fog.svg'
import card from '@/public/convert-card.svg'

function Profilebuttons({setProfile,setShowMyTours,setShowMyTransaction,showProfile,showMyTours,showMyTransaction}) {
    const profileHandeler=()=>{
        setProfile(true)
        setShowMyTours(false)
        setShowMyTransaction(false)
    }

    const myToursHandeler=()=>{
        setShowMyTours(true)
        setProfile(false)
        setShowMyTransaction(false)
    }

    const transactionHandeler=()=>{
        setShowMyTransaction(true)
        setProfile(false)
        setShowMyTours(false)
    }
    return (
        // <div className={showProfile?`w-71 h-42 flex flex-col border border-[#00000033] rounded-[10px] overflow-hidden`:`w-71 h-42 flex flex-col border border-[#00000033] rounded-[10px] overflow-hidden bg-[#28A74540]`}>

         <div className=' w-71 h-42 flex flex-col border border-[#00000033] rounded-[10px] overflow-hidden'> 
            <button onClick={profileHandeler} className={showProfile?'flex items-center gap-2 cursor-pointer w-full h-[170px] bg-[#28A74540] *:font-normal *:text-[14px] *:text-[#28A745] pr-2':'flex items-center gap-2 cursor-pointer w-full h-[170px] *:font-normal *:text-[14px] pr-2 '}>
                <Image src={profile}  alt='profile icon'/>
                <p>پروفایل</p>
            </button>

            <button onClick={myToursHandeler} className={showMyTours?'flex items-center gap-2 cursor-pointer w-full h-[170px] bg-[#28A74540] *:font-normal *:text-[14px] *:text-[#28A745] pr-2':'flex items-center gap-2 cursor-pointer w-full h-[170px] *:font-normal *:text-[14px] pr-2'} >
                <Image src={sun} alt='sun icon' />
                <p>تور های من</p>
            </button>

            <button onClick={transactionHandeler} className={showMyTransaction?'flex items-center gap-2 cursor-pointer w-full h-[170px] bg-[#28A74540] *:font-normal *:text-[14px] *:text-[#28A745] pr-2':'flex items-center gap-2 cursor-pointer w-full h-[170px] *:font-normal *:text-[14px] pr-2'}>
                <Image src={card} alt='card icon' />
                <p>تراکنش ها</p>
            </button>
        </div>
    )
}

export default Profilebuttons