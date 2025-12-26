import React,{useState} from 'react'

function ModalCofirmCode() {
  const [code, setCode] = useState()
    return (
        <>
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-1">
                <div className='relative flex flex-col justify-center items-center gap-5 w-[80vw] sm:w-[472px] h-[338px] rounded-2xl bg-[#FFFFFF]'>
                    <span onClick={() => setShowSignIn(false)} className='absolute top-2 left-4 cursor-pointer'>X</span>

                    <h1 className='font-semibold text-[28px] text-[#282828]'>کد تایید را وارد کنید.</h1>
                    <h2 className='font-normal text-[16px]'>کد به شماره ۰۰ ارسال شد</h2>
                    {/* <label for='phone' className='font-light text-[14px] text-[rgba(0, 0, 0, 1)] '>شماره موبایل خود وارد کنید</label> */}
                    <input
                        type="text"
                        inputMode="numeric"
                        maxLength={5}
                        pattern="[0-9]*" onChange={(e) => setCode(e.target.value)} className='[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none focus:ring-0 focus:outline-none w-100 h-10 rounded-lg bg-[#FFFFFF] border border-[#00000040] text-[13px] text-[#00000080] font-light text-center' placeholder='کد تایید را وارد کنید' name='phone' />
                    <button className='w-100 h-10 rounded-lg bg-[#28A745] cursor-pointer border border-[#00000040] text-[#FFFFFF]'>ورود به تورینو</button>
                </div>
            </div>


        </>)
}

export default ModalCofirmCode