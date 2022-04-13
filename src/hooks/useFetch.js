import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch(url).then((res) => {
            if(!res.ok){
                throw Error('Could Not Fetch Data');
            }
            return res.json();
        }).then((data) => {
            setGoods(data);
            setLoading(false);
            setError(null)
        }).catch((err) => {
            setError(err.message);
            setLoading(false);
        })
    },[url])

    return{
        data,loading,error
    }
}

export default useFetch;