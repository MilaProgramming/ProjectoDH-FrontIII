import { useState, useEffect, useContext } from 'react';
import { FavoriteBossContext } from '../context/FavoriteBossContext';
import BossCard from '../components/BossCard';
import PapaImage from '../assets/1Papa.png';
import BolaImage from '../assets/5Bola.png';
import SenoraImage from '../assets/6Senora.png';
import Baronesa from '../assets/4Baronesa.png';

const bosses = [
    { id: 1, name: 'The Root Pack', image: PapaImage },
    { id: 2, name: 'Goopy Le Grande', image: BolaImage },
    { id: 3, name: 'Hilda Berg', image: SenoraImage },
    { id: 4, name: 'Baroness Von Bon Bon', image: Baronesa},
];

const Home = () => {
    const { favoriteBoss, updateFavoriteBoss } = useContext(FavoriteBossContext);
    const [bossList, setBossList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setBossList(bosses);
        }, 1000);
    }, []);

    return (
        <div className="home">
            <h1 className="home-title">¡Elige tu boss favorito!</h1>
            <div className="bosses-grid">
                {bossList.map((boss) => (
                    <BossCard 
                        key={boss.id} 
                        boss={boss} 
                        isFavorite={favoriteBoss?.id === boss.id}
                        onFavorite={updateFavoriteBoss}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
