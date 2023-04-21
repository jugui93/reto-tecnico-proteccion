import React, { useEffect, useState } from 'react';
import HeroeItem from "./HeroeItem";
import useGetHeroes from "../hooks/useGetHeroes";
import '../styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const HeroList = () => {
    const heroes = useGetHeroes(API);
    return (
        <section className='main-container'>
            <div className='ProductList'>
                {heroes.map(heroe =>(
                <HeroeItem heroe={heroe} key={heroe.id} />
                ))}
            </div>
        </section>
    );
};

export default HeroList;