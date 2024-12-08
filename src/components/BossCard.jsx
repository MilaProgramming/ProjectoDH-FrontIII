import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BossCard = ({ boss, isFavorite, onFavorite }) => {
    const handleFavorite = useCallback(() => {
        onFavorite(boss);
    }, [boss, onFavorite]);

    return (
        <div className="boss-card">
            <img className="boss-image" src={boss.image} alt={boss.name} />
            <h2 className="boss-name">{boss.name}</h2>
            <button className="favorite-button" onClick={handleFavorite}>
                {isFavorite ? '♥' : '♡'}
            </button>
            <Link to={`/bosses/${boss.id}`} className="details-link">
                <button className="details-button">Ver Detalles</button>
            </Link>
        </div>
    );
};

BossCard.propTypes = {
    boss: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    isFavorite: PropTypes.bool.isRequired,
    onFavorite: PropTypes.func.isRequired,
};

export default BossCard;
