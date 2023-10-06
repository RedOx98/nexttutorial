"use client"

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./Carticon";

type linker = {
    id: number,
    title: string,
    url: string,
};
const links: linker[]= [
    {id: 1, title: "Homepage", url: "/"},
    {id: 2, title: "Menu", url: "/menu"},
    {id: 3, title: "Working Hours", url: "/"},
    {id: 4, title: "contact", url: "/"},
]

const Menu = () => {
    const [open, setOpen] = useState<boolean>(false);

    /** TEMPORARY */
    const user: boolean = false;
    return (
        <div>
            {!open ? (
        <Image src="/open.png" alt="" width={20} height={20} onClick={() => {setOpen(!open)}}/>
            ) : (
        <Image src="/close.png" alt="" width={20} height={20} onClick={() => {setOpen(!open)}}/>
        )}
        {
            open && (
            <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
            {
                links.map((link) => {
                    return (
                        <Link href={link.url} key={link.id} onClick={()=> setOpen(!open)}>
                            {link.title}
                        </Link>
                    )
                })}
            {!user ? (
            <Link href="/login" onClick={()=> setOpen(!open)}>Login</Link>
            ): (
            <Link href="/orders" onClick={()=> setOpen(!open)}>Orders</Link>
            )
        }
        <Link href='/cart' onClick={()=> setOpen(!open)}>
            <CartIcon/>
        </Link>
        </div>
            )
            }
        </div>
    )
};

export default Menu;