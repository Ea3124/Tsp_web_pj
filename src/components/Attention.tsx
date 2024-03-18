import React from 'react'

const Attention = () => {
    return (
        <div className='flex flex-col p-1 justify-center items-center h-full w-full'>
            <div className='flex flex-col items-center bg-white rounded-custom-1 mt-1 p-2 md:p-3 lg:p-12 mx-1 h-2/3 md:h-auto lg:h-3/4 w-11/12 lg:w-5/6 shadow-xl'>
                    <button className=' bg-custom-orange text-xl md:text-4xl lg:text-8xl text-custom-font-gray p-1 lg:p-3 rounded-3xl font-light w-1/2 mb-4 lg:mb-28'>출석표</button>
                <div className="relative grid grid-cols-5 gap-6 md:gap-10 lg:gap-28 pt-1 px-6
                    sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5
                    xl:grid-cols-5 2xl:grid-cols-5 text-center ">
                    <div className='h-10 md:h-16 lg:h-40 w-10 md:w-16 lg:w-40 rounded-full bg-custom-blue-2 border-2 md:border-4 lg:border-8 border-neutral-600 opacity-60'>
                    </div>
                    <div className='h-10 md:h-16 lg:h-40 w-10 md:w-16 lg:w-40 rounded-full bg-custom-blue-2 border-2 md:border-4 lg:border-8 border-neutral-600 opacity-60'>
                    </div>
                    <div className='h-10 md:h-16 lg:h-40 w-10 md:w-16 lg:w-40 rounded-full bg-custom-blue-2 border-2 md:border-4 lg:border-8 border-neutral-600 opacity-60'>
                    </div>
                    <div className='h-10 md:h-16 lg:h-40 w-10 md:w-16 lg:w-40 rounded-full bg-custom-blue-2 border-2 md:border-4 lg:border-8 border-neutral-600 opacity-60'>
                    </div>
                    <div className='h-10 md:h-16 lg:h-40 w-10 md:w-16 lg:w-40 rounded-full bg-custom-blue-2 border-2 md:border-4 lg:border-8 border-neutral-600 opacity-60'>
                    </div>
                    
                    <div className='h-10 md:h-16 lg:h-40 w-10 md:w-16 lg:w-40  rounded-full   border-2 md:border-4 lg:border-8 border-dashed border-neutral-600 opacity-60'>
                    </div>
                    <div className='h-10 md:h-16 lg:h-40 w-10 md:w-16 lg:w-40  rounded-full   border-2 md:border-4 lg:border-8 border-dashed border-neutral-600 opacity-60'>
                    </div>
                    <div className='h-10 md:h-16 lg:h-40 w-10 md:w-16 lg:w-40  rounded-full   border-2 md:border-4 lg:border-8 border-dashed border-neutral-600 opacity-60'>
                    </div>
                    <div className='h-10 md:h-16 lg:h-40 w-10 md:w-16 lg:w-40  rounded-full   border-2 md:border-4 lg:border-8 border-dashed border-neutral-600 opacity-60'>
                    </div>
                    <div className='h-10 md:h-16 lg:h-40 w-10 md:w-16 lg:w-40  rounded-full   border-2 md:border-4 lg:border-8 border-dashed border-neutral-600 opacity-60'>
                    </div>
                    <div className='h-10 md:h-16 lg:h-40 w-10 md:w-16 lg:w-40  rounded-full   border-2 md:border-4 lg:border-8 border-dashed border-neutral-600 opacity-60'>
                    </div>
                    <div className='h-10 md:h-16 lg:h-40 w-10 md:w-16 lg:w-40  rounded-full   border-2 md:border-4 lg:border-8 border-dashed border-neutral-600 opacity-60'>
                    </div>
                    <div className='h-10 md:h-16 lg:h-40 w-10 md:w-16 lg:w-40  rounded-full   border-2 md:border-4 lg:border-8 border-dashed border-neutral-600 opacity-60'>
                    </div>
                    <div className='h-10 md:h-16 lg:h-40 w-10 md:w-16 lg:w-40  rounded-full   border-2 md:border-4 lg:border-8 border-dashed border-neutral-600 opacity-60'>
                    </div>
                    <div className='h-10 md:h-16 lg:h-40 w-10 md:w-16 lg:w-40  rounded-full   border-2 md:border-4 lg:border-8 border-dashed border-neutral-600 opacity-60'>
                    </div>
                    
                </div>
            </div>
                <div className='flex flex-row justify-between text-sm md:text-xl pt-2 text-custom-font-gray-2 font-abel mb-4 w-5/6'>
                    <p>현재 스탬프 개수 : 5개</p>
                    <p>같은 스탬프 수의 인원 : 5명</p>
                </div>
        </div>
    )
}

export default Attention