"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type dumlist = {
    id: number,
    title: string,
    image: string,
};

const dums: dumlist[] = [
    {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.jpg",

},
{
    id: 2,
    title: "we deliver your order wherever you are in LAG",
    image: "/slide2.jpg",

},
{
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",

},
];
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    useEffect((()=> {
        const interval = setInterval(()=> {
            setCurrentSlide((prev)=> (prev === dums.length - 1 ? 0 : prev + 1));
            
        }, 2000)
        return ()=> clearInterval(interval);
    }), []);
    
    return (
        <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
            {/* TEXT CONTAINER */}
            <div className='flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold'>
                <h1 className="text-5xl text-center uppercase p-4 md:px-10 md:text-6xl xl:text-7xl">
                    {dums[currentSlide].title}
                </h1>
                <button className='bg-red-500 text-white py-4 px-8'>Order Now</button>
            </div>
            {/* IMAGE CONTAINER */}
            <div className='w-full flex-1 relative'>
                <Image src={dums[currentSlide].image} alt='' fill className='object-cover'/>
            </div>
        </div>
    )
};

export default Slider