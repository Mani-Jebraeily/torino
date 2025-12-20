import Header from '@/components/header'
import Main from '@/components/template/main'
import React, { createContext } from 'react'

export const TourContext = createContext()
function Index({ tours }) {
  return (
    <>
      <TourContext.Provider value={{tours}}>
        <Main />
      </TourContext.Provider>
    </>
  )
}

export default Index

export async function getServerSideProps() {
  const api = process.env.NEXT_PUBLIC_API_URL
  const res = await fetch(`${api}/tour`)
  const tours = await res.json()
  return {
    props: { tours }
  }
}