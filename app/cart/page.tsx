import Image from 'next/image'
import React from 'react'

const CartPage = () => {
    return (
        <div className='h-[calc(100vh-6rem)] flex flex-col text-red-500 lg:flex-row'>
            {/* PRODUCTS CONTAINER */}
            <div className='h-[60%] md:h-[58%] p-4 flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'>
                {/* SINGLE ITEM */}
                <div className='flex items-center justify-between mb-2 lg:mb-4'>
                    <Image src="/temporary/p1.png" alt='cart image' width={100} height={100} />
                    <div>
                        <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className='font-bold'>$79.90</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
                {/* SINGLE ITEM */}
                <div className='flex items-center justify-between mb-2 lg:mb-4'>
                    <Image src="/temporary/p1.png" alt='cart image' width={100} height={100} />
                    <div>
                        <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className='font-bold'>$79.90</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
                {/* SINGLE ITEM */}
                <div className='flex items-center justify-between mb-2 lg:mb-4'>
                    <Image src="/temporary/p1.png" alt='cart image' width={100} height={100} />
                    <div>
                        <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
                        <span>Large</span>
                    </div>
                    <h2 className='font-bold'>$79.90</h2>
                    <span className='cursor-pointer'>X</span>
                </div>
            </div>
            {/* PAYMENT CONTAINER */}
            <div className='h-[40%] md:h-[42%] p-4 bg-fuchsia-50 flex flex-col justify-center gap-4 lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40'>
                <div className='flex justify-between'>
                    <span>Subtotal (3items)</span>
                    <span>$81.70</span>
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
                    <span className='font-bold'>$81.70</span>
                </div>
                <button className='bg-red-500 text-white p-3 rounded-md w-1/2 uppercaseb self-end'>checkout</button>
            </div>

        </div>
    )
}

export default CartPage
