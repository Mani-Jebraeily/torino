import React from 'react'
import TourDetails from '@/components/tourDetails'
function TourId({tour}) {
  return (
    <TourDetails tour={tour}/>
  )
}

export default TourId

export async function getServerSideProps(context) {
  const id=context.query.tourId
  const api = process.env.NEXT_PUBLIC_API_URL
  const res = await fetch(`${api}/tour/${id}`)
  const tour = await res.json()
  return {
    props: { tour }
  }
}