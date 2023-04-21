import { useEffect, useState } from "react";
import axios from 'axios';

const useGetHeroes = (API) => {
    const [heroes, setHeroes] = useState([]);

    useEffect(async()=>{
        const response = await axios(API);
        setHeroes(response.data);
    }, []);

    return heroes;
};

export default useGetHeroes;