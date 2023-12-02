import { useState,useEffect } from "react";

const useCurrencyInfo = (currency) => {
    const [data,setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@v1/latest/currencies/${currency}.json`,{method: "GET"})
        .then((res) =>res.json())
        .then((res) =>{
            setData(res[currency]);
        })
        .catch((error) => {
            console.error('Error fetching currency data:', error);
        });
    },[currency])
    return data;
}

export default useCurrencyInfo