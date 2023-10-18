"use client"

import React, { useEffect, useState } from "react";

type Props = {
    bill?: number,
    id?: number,
    options?:{
    title: string,
    additionalPrice: number,
}[];
}

type Prices = {
    pay: number,
    quantity: number,
    selected: number,
    total: number,
}

const Price = ({bill, id, options}: Props) => {
    const [payment, setPayment] = useState<Prices>({
        pay: bill ?? 0,
        quantity: 1,
        selected: 0,
        total: 0,
    });

    useEffect((()=> {
        setPayment(prev=> ({
            ...prev,
            total: prev.quantity * (options ? (bill ?? 0) + (options[prev.selected]?.additionalPrice) : (bill ?? 0))
        }))
    }), [payment.quantity, payment.selected, options, bill])
    return (
        <div className="flex flex-col gap-4 ">
            <h2 className="text-2xl font-bold">${payment?.pay?.toFixed(2)}</h2>
            {/* OPTIONS CONTAINER */}
            <div className="flex gap-4">
                {
                    options?.map((option, index) => (
                        <button key={option.title} className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md" style={{
                            background: payment.selected === index ? "rgb(248 113 113)" : "white",
                            color: payment.selected === index ? "white" : "red"
                        }}
                        onClick={()=> setPayment(prev => ({
                            ...prev,
                            selected: index
                        }))}
                        >{option.title}</button>
                    ))
                }
            </div>
            {/* QUANTITY AND ADD BUTTON CONTAINER */}
            <div className="flex justify-between items-center ">
                {/* QUANTITY */}
                <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
                    <span className="">Quantity</span>
                    <div className="flex gap-4 items-center ">
                        <button className="" onClick={()=> setPayment(prev => ({...prev, quantity: prev.quantity > 1 ? prev.quantity - 1 : 1}))}>{'<'}</button>
                        <span className="">{payment.quantity}</span>
                        <button className="" onClick={()=> setPayment(prev => ({...prev, quantity: prev.quantity < 9 ? prev.quantity + 1 : 1}))}>{'>'}</button>
                    </div>
                </div>
                {/* CART BUTTON */}
                <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500">Add to Cart</button>
            </div>
        </div>
    )
};

export default Price;

// price={product?.price} id={product?.id} options={product?.options