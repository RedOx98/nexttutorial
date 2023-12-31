import React, { useState } from "react";
import Image from "next/image";
import { singleProduct } from "@/data";
import Price from "@/components/Price";




const SingleProductPage = () => {
    const product = singleProduct.find((product) => product.img);
    
    return (
            <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
            {/* IMAGE CONTAINER */}
            {product?.img && (
            <div className="relative w-full h-1/2 md:h-[70%]">
                <Image 
                src={product.img}
                alt="" 
                className="object-contain"
                fill 
                />
            </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
                <h1 className="text-3xl font-bold uppercase xl:text-5xl">
                    {product?.title}
                </h1>
                <p className="">
                    {product?.desc}
                </p>
                <Price bill={product?.price} id={product?.id} options={product?.options}/>
            </div>
        </div>
    )
};

export default SingleProductPage;