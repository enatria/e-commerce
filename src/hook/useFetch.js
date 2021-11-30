import  { useState, useEffect } from 'react';
import axios from 'axios'

const useFetch = (url='', options=null) =>{
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(()=>{
        let isMounted = true;
 
        setLoading(true);

        axios.get(url, options)
        .then(res=>res.data)
        .then(data => {
            if (isMounted) {
                console.log(data);
                setData(data);
                setError(null)
            }
        })
        .catch(error=>{
            if(isMounted){
                setError(error);
                setData(null);
            }
        })
        .finally(()=>isMounted && setLoading(false))

        return ()=> (isMounted = false);
    }, [url, options])

    return {error, data, loading};
}

export default useFetch;