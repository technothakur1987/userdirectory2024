import { useState, useEffect } from 'react';

const UseFetch = (api) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

       
        const fetchData = async (api) => {
            try {
                const response = await fetch(api);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };


        setTimeout(()=>{
            fetchData(api);
        },1000)

        
    }, [api]);

    return { data, loading, error };
};

export default UseFetch;
