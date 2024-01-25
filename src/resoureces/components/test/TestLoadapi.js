import React, { useState, useEffect } from "react";
import AxiosInstance from "../../helper/Axiosintances";


const TestLoadapi = () => {
    const [products, setProducts] = useState(undefined);

    const fetchData = async () => {
        const productsData = await AxiosInstance().get('/api/products')
        console.log("check products data : ", productsData.data);
        setProducts(productsData.data);

    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>
            <h1>check data products:</h1>
            {JSON.stringify(products)}
        </div>
    )

}

export default TestLoadapi;