import { featuredProducts } from '@/data';
import Image from 'next/image';
import React from 'react';

const FeaturedItems = () => {
    return (
        <div className='w-screen overflow-x-scroll text-red-500'>
            {/* WRAPPER */}
            <div className="w-max flex">
                {/* SINGLE ITEM */}
                {
                    featuredProducts.map((product) => (
                        <div key={product.id} className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33.333vw] xl:h-[90vh]">
                    {/* IMAGE CONTAINER */}
                    {product.img && (
                        <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                        <Image src={product.img} alt='' fill className='object-contain'/>
                    </div>
                    )
                    }
                    {/* TEXT CONTAINER */}
                    <div className="flex-1 flex flex-col items-center justify-center text-center gap-4">
                        <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">{product.title}</h1>
                        <p className='p-4 2xl:p-8'>{product.desc}</p>
                        <span className='text-xl font-bold'>${product.price}</span>
                        <button className='bg-red-500 text-white p-2 rounded-md'>Add to Cart</button>
                    </div>
                </div>
                    ))
                    
                }
            </div>
        </div>
    )
};

export default FeaturedItems;