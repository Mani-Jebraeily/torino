import Header from '@/components/header'
import ModalSignIn from '@/components/modules/modalSignIn'
import React, { useState } from 'react'

function Index() {
  const[showSignIn,setShowSignIn]=useState(true)
  return (
    <>
    {showSignIn&&<ModalSignIn setShowSignIn={setShowSignIn}/>}
    </>
  )
}

export default Index