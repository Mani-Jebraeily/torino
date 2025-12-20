import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Tours() {
    const api = process.env.NEXT_PUBLIC_API_URL
    const [tours,setTour]=useState([])

    useEffect(()=>{
        axios.get(`${api}/tour`)
        .then((res)=>setTour(res.data))
    },[])
    console.log(tours)

    return (
        <>
        </>
    )
}

export default Tours