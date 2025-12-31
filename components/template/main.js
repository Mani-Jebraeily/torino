import React from 'react'
import Cover from '../cover'
import Tours from '../tours'
import Information from '../information'
import Filter from '../filter'
import ModalCofirmCode from '../modules/modalCofirmCode'
import ModalSignIn from '../modules/modalSignIn'
import Header from '../header'


function Main() {
    
  return (
    <>
    <Header/>
    <Cover/>
    {/* <ModalCofirmCode/> */}
    {/* <ModalSignIn/> */}
    <Filter/>
    <Tours/>
    <Information/>
    </>

  )
}

export default Main