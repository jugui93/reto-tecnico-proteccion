import React, { useEffect, useState } from 'react';
import '../../styles/productItem.css';


const HeroItem = ({ superheroId }) => {
	
    const [superheroData, setSuperheroData] = useState([]);
    const [showImage, setShowImage] = useState(true)

    const API = 'https://superheroapi.com/api/10230158846056302/';
    
    useEffect( () => {
        fetch( API+superheroId )
          .then((data) => data.json())
          .then((res) => {
            setSuperheroData(res)})
          .catch((err) => console.log(err))
    }, [superheroId])

    const showImageHandler = () => {
        setShowImage(!showImage);
    }

	return (
		<div className="ProductItem" onClick={showImageHandler}>
            {showImage && <img src={superheroData.image?.url} alt={superheroData.name} />}
			{!showImage && <div className="product-info">
				<div>
                    <h2>Nombre:</h2>
					<p>{superheroData.name}</p>
                    <h2>Genero:</h2>
					<p>{superheroData.appearance?.gender}</p>
                    <h2>Raza:</h2>
					<p>{superheroData.appearance?.race}</p>
				</div>
				
			</div>}
		</div>
	);
}

export default HeroItem;