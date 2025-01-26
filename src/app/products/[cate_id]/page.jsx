'use client'
import Image from "next/image";
import Link from "next/link";
import React, {useContext, useEffect, useState} from "react";
import {ShoppingCartContext} from "@/app/layout";
import axios from "axios";
import {CartComponent} from "@/components/CartComponent";

export default function ProductsByCategoryId({params}) {

    const {addToCart} = useContext(ShoppingCartContext)
    const {cate_id} = React.use(params);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/api/affable-bean/${cate_id}`).then(resp => setData(resp.data)).catch(err => console.log(err))
    }, [])
    const handleAddToCart = (item) => addToCart(item);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="d-flex flex-column mt-2">
                            <Link href="/products/1" className="btn btn-success rounded-top-pill mb-2">Dairy</Link>
                            <Link href="/products/2" className="btn btn-success rounded mb-2">Meat</Link>
                            <Link href="/products/3" className="btn btn-success rounded mb-2">Bakery</Link>
                            <Link href="/products/4" className="btn btn-success rounded-bottom-pill mb-2">Fruit &
                                Veg</Link>
                        </div>
                    </div>
                    <div className="col-9 mt-2">
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <div
                                        className="card-header bg-warning text-dark d-inline-flex justify-content-between">
                                        <h3>Products</h3>
                                        <CartComponent/>
                                    </div>
                                    <div className="card-body bg-warning">
                                        <table className="table table-striped table-dark">
                                            <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                data && data.map(item => (
                                                    <tr key={item.id}>
                                                        <td>
                                                            <Image src={`/images/products/${item.name}.png`} alt={item.name}
                                                                   width={142} height={70}/>
                                                        </td>
                                                        <td className="text-capitalize">{item.name}</td>
                                                        <td>$ {item.price}</td>
                                                        <td>
                                                            <button className="btn btn-outline-success"
                                                                    onClick={() => handleAddToCart(item)}>Purchase
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}