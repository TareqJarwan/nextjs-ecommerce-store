'use client';

import { ShoppingCart } from "lucide-react";

import Currency from "@/components/currency";
import Button from "@/components/ui/button";

import { Product } from "@/types";

interface InfoProps {
    data: Product
}

const Info: React.FC<InfoProps> = ({
    data
}) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mr-3">{data.name}</h1>
            <div className="flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data.price} />
                </p>
            </div>
            <hr className="my-4" />

            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Size: </h3>
                    <div>
                        {data.size.value}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Color: </h3>
                    <div className="rounded-full w-6 h-6 border border-gray-600" style={{ background: data.color.value }} />
                </div>
            </div>

            <div className="mt-10 flex items-center gap-x-3">
                <Button className="flex items-center gap-x-2">
                    Add To Cart
                    <ShoppingCart />
                </Button>
            </div>
        </div>
    );
}

export default Info;