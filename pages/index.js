import Header from '@/components/header'
import Main from '@/components/template/main'
import React, { createContext, useState } from 'react'

export const TourContext = createContext()
function Index({ data }) {
  const [tours,setTours]=useState(data)
  return (
    <>
      <TourContext.Provider value={{tours,setTours}}>
        <Main />
      </TourContext.Provider>
    </>
  )
}

export default Index

export async function getServerSideProps() {
  const api = process.env.NEXT_PUBLIC_API_URL
  const res = await fetch(`${api}/tour`)
  const data = await res.json()
  return {
    props: { data }
  }
}