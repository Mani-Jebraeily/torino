import React from 'react'

function TourDetails({tour}) {
    const [year, month, day] = tour.startDate.split("-")
    console.log(year, month, day)
    return (
        <>
            <div className='bg-gray-100 w-full h-220 flex justify-center' >

                <div className='max-w-[80vw] w-297  h-107 bg-[#FFFFFF] border border-[#00000033] rounded-xl mt-10'>
                    <div>
                        <img src={tour.image} className='rounded-xl w-75 h-50' />

                        <div>
                            <h1>{tour.title}</h1>
                        </div>
                    </div>


                </div>


            </div>
        </>
    )
}

export default TourDetails