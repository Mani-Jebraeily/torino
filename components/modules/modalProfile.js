import React from 'react'
import profile from '@/public/profile.svg'
import logout from '@/public/logout.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'




function ModalProfile() {
        const router = useRouter()
    

    const deleteTokenHandeler = () => {
        document.cookie = `token=0; Expires=Thu, 01 Jan 1970 00:00:01 GMT `
        document.cookie = `phoneNumber=0; Expires=Thu, 01 Jan 1970 00:00:01 GMT `
        router.refresh()
    }
    return (
        <div className=' absolute top-11 flex flex-col justify-center  gap-4 w-50  h-25 bg-[#FFFFFF] bg- red-100 rounded-[11px] '>
            <Link href="/profile" className='flex gap-2 cursor-pointer pr-1'>
                <Image src={profile} alt='profile svg' />
                <button className='cursor-pointer'>اطلاعات حساب کاربری</button>
            </Link>
            <div className='flex gap-2 cursor-pointer pr-1'>
                <Image src={logout} alt='logout svg' />
                <button onClick={deleteTokenHandeler} className='font-normal text-[14px] text-[#D40000]'>خروج از حساب کاربری</button>
            </div>


        </div>
    )
}

export default ModalProfile