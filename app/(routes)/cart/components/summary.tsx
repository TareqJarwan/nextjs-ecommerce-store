'use client';

import { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

import Currency from "@/components/currency";
import Button from "@/components/ui/button";

import useCart from "@/hooks/use-cart";

const Summary = () => {
    const searchParams = useSearchParams();

    const items = useCart(state => state.items);
    const removeAll = useCart(state => state.removeAll);

    const totalPrice = items.reduce((total, cur) => total + Number(cur.price), 0);

    const onCheckout = async () => {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map(product => product.id)
        });

        window.location = res.data.url;
    }

    useEffect(() => {
        if (searchParams.get('success')) {
            toast.success("Payment completed.");
            removeAll();
        }

        if (searchParams.get('canceled')) toast.error("Something went wrong.");

    }, [removeAll, searchParams])


    return (
        <div
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
            <h2 className="text-lg font-medium text-gray-900">
                Order Summary
            </h2>

            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between bottom-0 border-gray-200 pt-4">
                    <div className="text-base font-medium to-gray-900">
                        Order Total
                    </div>

                    <Currency value={totalPrice} />
                </div>
            </div>

            <Button
                onClick={onCheckout}
                className="w-full mt-6"
            >
                Checkout
            </Button>
        </div>
    );
}

export default Summary;