import { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FavoriteBossContext } from './FavoriteBossContext';

const FavoriteBossProvider = ({ children }) => {
    const [favoriteBoss, setFavoriteBoss] = useState(null);

    useEffect(() => {
        const storedBoss = localStorage.getItem('favoriteBoss');
        if (storedBoss) {
            setFavoriteBoss(JSON.parse(storedBoss));
        }
    }, []);


    const updateFavoriteBoss = useCallback((boss) => {
        if (boss && boss.id === favoriteBoss?.id) {
            // If the same boss is clicked, remove from favorites
            localStorage.removeItem('favoriteBoss');
            setFavoriteBoss(null);
        } else {
            // Set new favorite boss
            localStorage.setItem('favoriteBoss', JSON.stringify(boss));
            setFavoriteBoss(boss);
        }
    }, [favoriteBoss]);

    return (
        <FavoriteBossContext.Provider value={{ favoriteBoss, updateFavoriteBoss }}>
            {children}
        </FavoriteBossContext.Provider>
    );
};

FavoriteBossProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FavoriteBossProvider;
