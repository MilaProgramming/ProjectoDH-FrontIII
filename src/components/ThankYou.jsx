import { useLocation } from 'react-router-dom';

const ThankYou = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');
    const comment = queryParams.get('comment');

    return (
        <div className="thank-you-container">
            <h1 className="thank-you-title">Gracias :)</h1>
            <p className="thank-you-message">Hemos recibido tu mensaje</p>
            <div className="thank-you-details">
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Comentario:</strong> {comment}</p>
            </div>
        </div>
    );
};

export default ThankYou;
