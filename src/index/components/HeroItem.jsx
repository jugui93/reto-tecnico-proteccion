import React from 'react';
import '../../styles/productItem.css';
// import AppContext from '../context/AppContext'
// import addToCartImage from '@icons/bt_add_to_cart.svg';

const HeroItem = ({ hero }) => {
	
	return (
		<div className="ProductItem">
			<img src={hero.image.url} alt={hero.title} />
			<div className="product-info">
				<div>
					<p>{hero.name}</p>
					<p>{hero.powerstats.intelligence}</p>
				</div>
				
			</div>
		</div>
	);
}

export default HeroItem;