import React from 'react'
import Cover from '../cover'
import Tours from '../tours'
import Information from '../information'
import Filter from '../filter'
import ModalCofirmCode from '../modules/modalCofirmCode'
// import MyDatePicker from '../test'


function Main() {
    
  return (
    <>
    <Cover/>
    <ModalCofirmCode/>
    {/* <MyDatePicker/> */}
    <Filter/>
    <Tours/>
    <Information/>
    </>

  )
}

export default Main