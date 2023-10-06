import React from 'react';
import Link from "next/link";
import Image from 'next/image';

const CartIcon = () => {
    return (
        <Link href='/cart' className='flex gap-1'>
            <div className='relative w-8 h-8 md:w-5 md:h-5'>
                <Image src="/cart.jpeg" alt='' fill/>
            </div>
            <span>Cart (3)</span>
        </Link>
    )
};

export default CartIcon;