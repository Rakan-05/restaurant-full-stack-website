"use client";
import { useCartStore } from '@/utils/store'
import Image from 'next/image'
import { useEffect } from 'react';

const CartPage = () => {

    const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
    useEffect(() => {
        useCartStore.persist.rehydrate();
    }, []);
    return (
        <div className='h-[calc(100vh-6rem)] flex flex-col text-red-500 lg:flex-row'>
            {/* PRODUCTS CONTAINER */}
            <div className='h-[60%] md:h-[58%] p-4 flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'>
                {/* SINGLE ITEM */}
                {products.map((item) => (
                    <div className='flex items-center justify-between mb-2 lg:mb-4' key={item.id}>
                        {item.img && <Image src={item.img} alt='cart image' width={100} height={100} />}
                        <div>
                            <h1 className='uppercase text-xl font-bold'>{item.title} X{item.quantity}</h1>
                            <span>{item.optionTitle}</span>
                        </div>
                        <h2 className='font-bold'>${item.price}</h2>
                        <span className='cursor-pointer' onClick={() => removeFromCart(item)} >X</span>
                    </div>
                ))}
            </div>
            {/* PAYMENT CONTAINER */}
            <div className='h-[40%] md:h-[42%] p-4 bg-fuchsia-50 flex flex-col justify-center gap-4 lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40'>
                <div className='flex justify-between'>
                    <span>Subtotal ({totalItems}items)</span>
                    <span>${totalPrice}</span>
                </div>
                <div className='flex justify-between'>
                    <span>Service cost</span>
                    <span>$0.00</span>
                </div>
                <div className='flex justify-between'>
                    <span>Delivery cost</span>
                    <span className='text-green-500'>FREE!</span>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <span>TOTAL(INCL. VAT)</span>
                    <span className='font-bold'>${totalPrice}</span>
                </div>
                <button className='bg-red-500 text-white p-3 rounded-md w-1/2 uppercaseb self-end'>checkout</button>
            </div>

        </div>
    )
}

export default CartPage
