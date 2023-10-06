import react from "react";

const OrdersPage = () => {
    return (
        <div className="p-4 lg:px-20 xl:px-40 ">
            <table className="w-full border-separate border-spacing-3">
                <thead className="">
                    <tr className="text-left ">
                        <th className="hidden md:block">Order ID</th>
                        <th className="">Date</th>
                        <th className="">Price</th>
                        <th className="hidden md:block">Products</th>
                        <th className="">Status</th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr className="text-sm md:text-base bg-red-50 ">
                        
                            <td className="hidden md:block py-6 px-1">132242345235</td>
                            <td className="py-6 px-1">19.07.2023</td>
                            <td className="py-6 px-1">89.80</td>
                            <td className="hidden md:block py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
                            <td className="py-6 px-1">On the way approximately (10 min)...</td>
                        
                    </tr>
                    <tr className="text-sm md:text-base odd:bg-gray-100 ">
                        
                            <td className="hidden md:block py-6 px-1">132242345235</td>
                            <td className="py-6 px-1">19.07.2023</td>
                            <td className="py-6 px-1">89.80</td>
                            <td className="hidden md:block py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
                            <td className="py-6 px-1">On the way approximately (10 min)...</td>
                        
                    </tr>
                    <tr className="text-sm md:text-base odd:bg-gray-100 ">
                        
                            <td className="hidden md:block py-6 px-1">132242345235</td>
                            <td className="py-6 px-1">19.07.2023</td>
                            <td className="py-6 px-1">89.80</td>
                            <td className="hidden md:block py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
                            <td className="py-6 px-1">On the way approximately (10 min)...</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default OrdersPage;