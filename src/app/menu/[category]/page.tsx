import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import react from "react";

const CategoryPage = () => {
    return (
        <div className="flex flex-wrap text-red-500">
            {pizzas.map((pizza)=> (
                <Link href={`/product/${pizza.id}`} key={pizza.id} className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50 ">
                    {/* IMAGE CONTAINER */}
                    {
                        pizza.img && (
                        <div className="relative h-[80%]">
                         <Image src={pizza.img} alt="" fill className="object-cover"/>
                        </div>
                        )
                    }
                    {/* TEXT CONTAINER */}
                    <div className="flex items-center justify-between font-bold">
                        <h1 className="text-2xl uppercase p-2">{pizza.title}</h1>
                        <h1 className="group-hover:hidden text-xl">${pizza.price}</h1>
                        <button className="hidden group-hover:block upper bg-red-500 text-white p-2 rounded-md">Add to cart</button>
                    </div>
                </Link>
            ))}
        </div>
    )
};

export default CategoryPage;