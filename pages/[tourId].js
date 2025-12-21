import React from 'react'
import { useRouter } from 'next/router'
function TourId({tour}) {
    const router=useRouter()
    const {tourId}=router.query
    console.log(tourId)
    console.log(tour)
  return (
    <div>TourId</div>
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