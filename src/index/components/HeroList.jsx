import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import HeroItem from "./HeroItem";

import '../../styles/productList.css';

const API = 'https://superheroapi.com/api/10230158846056302/';

const HeroList = () => {
    const [heroes, setHeroes] = useState([]);

    useEffect(
        ()=>{
        const heroesApi = [];
        const fetchData = async (api) => {
            let response = await fetch(api)
            let data = response.json();
            return data
        }
        for (let index = 1; index < 30; index++) {
            let response1 = fetchData(`${API}${index}`);
            console.log(response1)
            heroesApi.push(response1)            
        }
        console.log(heroesApi);
        setHeroes(heroesApi);
    }, []);
    return (
        <section className='main-container'>
            <div className='ProductList'>
                {heroes.map(hero =>(
                <HeroItem hero={hero} key={hero.id} />
                ))}
            </div>
        </section>
    );
};

export default HeroList;