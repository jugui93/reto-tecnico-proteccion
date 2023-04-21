import { useEffect, useState } from "react";
import axios from 'axios';

const useGetHeroes = (API) => {
    const [heroes, setHeroes] = useState([]);

    useEffect(
        async()=>{
        const heroesApi = [];

        for (let index = 1; index < 30; index++) {
            const response = await axios(`${API}${index}`);
            heroesApi.push(response)            
        }
        console.log(heroesApi);
        setHeroes(heroesApi);
    }, []);

    return heroes;
};

export default useGetHeroes;