import Header from '@/components/header'
import Main from '@/components/template/main'
import React from 'react'

function Index({tours}) {
  console.log(tours)
  return (
    <>
    <Main/>
    </>
  )
}

export default Index

export async function getServerSideProps(){
     const api=process.env.NEXT_PUBLIC_API_URL
    const res = await fetch(`${api}/tour`)
    const tours= await res.json()
    return{
        props:{tours}
    }
}