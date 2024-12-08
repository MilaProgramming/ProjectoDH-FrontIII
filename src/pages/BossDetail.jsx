import { useParams } from 'react-router-dom';
import BossGif1 from '../assets/1Papa.gif'; // Replace with actual GIF paths
import BossGif2 from '../assets/2Bola.gif';
import BossGif3 from '../assets/3Senora.gif';
import BossGif4 from '../assets/4Baronesa.gif';

const bossDetails = [
    { 
        id: 1, 
        name: 'The Root Pack', 
        description: '¡Un grupo de enemigos traviesos con temática de papa! El Root Pack incluye una papa gigante, una cebolla parlanchina y una zanahoria psíquica que utilizan sus habilidades únicas para detener a Cuphead y Mugman. Sus ataques son desafiantes, pero introducen a los jugadores en el mundo caprichoso y peligroso de Cuphead.',
        gif: BossGif1
    },
    { 
        id: 2, 
        name: 'Goopy Le Grande', 
        description: 'Un slime azul saltarín y excesivamente confiado que adora desafiar a Cuphead en duelos uno a uno. Goopy Le Grande se hace más grande durante la pelea, lo que dificulta esquivar sus ataques. Es conocido por sus expresiones cómicas y movimientos exagerados, aportando humor a su batalla como jefe.',
        gif: BossGif2
    },
    { 
        id: 3, 
        name: 'Hilda Berg', 
        description: 'Una jefa caprichosa que toma los cielos en un dirigible. Hilda Berg se transforma en varias constelaciones, cada una con su propio conjunto de ataques. Su batalla aérea es una prueba de precisión y tiempo mientras lanza estrellas, lunas y tornados contra sus enemigos. ¡Su personalidad es tan ruidosa como su risa!',
        gif: BossGif3
    },
    {
        id: 4,
        name: 'Baroness Von Bon Bon',
        description: 'La Baronesa Von Bon Bon es una jefa elegante y malvada que gobierna un castillo de dulces. Ella envía a sus secuaces de azúcar para detener a Cuphead y Mugman, cada uno con su propio estilo de combate. La Baronesa es una jefa de múltiples fases que desafía a los jugadores a mantenerse al tanto de sus movimientos y ataques.',
        gif: BossGif4
    }
    
];

const BossDetail = () => {
    const { id } = useParams(); 
    const boss = bossDetails.find(boss => boss.id === parseInt(id));

    if (!boss) {
        return <div className="boss-not-found">Boss not found!</div>;
    }

    return (
        <div className="boss-detail">
            <div className="boss-gif-container">
                <img src={boss.gif} alt={`${boss.name} gameplay`} className="boss-gif" />
            </div>
            <div className="boss-info">
                <h1 className="boss-title">{boss.name}</h1>
                <p className="boss-description">{boss.description}</p>
            </div>
        </div>
    );
};

export default BossDetail;
