import React, {useContext} from "react";
import {ShoppingCartContext} from "@/app/layout";
import {TiShoppingCart} from "react-icons/ti";
import Link from "next/link";


export const CartComponent = () => {
    const {cartItems} = useContext(ShoppingCartContext)
    return (
        <>
            <Link href="/products/cart-view">
                <TiShoppingCart size={25}/>
                <span className="fs-5 ms-1">{cartItems.length}</span>
            </Link>
        </>
    )
}