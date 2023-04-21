
import HeroItem from "./HeroItem";

import '../../styles/productList.css';



const HeroList = () => {
    const cardsNumber = 40;
    const cards = Array.from({length:cardsNumber}, (_,i) => i+1)

    return (
        <section className='main-container'>
            <div className='ProductList'>
                {cards.map((_, index) =><HeroItem key={index} superheroId={index + 1} />
                )}
            </div>
        </section>
    );
};

export default HeroList;