import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        comment: '',
    });

    const navigate = useNavigate(); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/thank-you?email=${encodeURIComponent(formData.email)}&comment=${encodeURIComponent(formData.comment)}`);
    };

    return (
        <div className="contact-form-container">
            <h1 className="contact-title">¡Contáctanos!</h1>
            <p className="contact-subtitle">¡Nos encantaría saber tu opinión!</p>
            <form onSubmit={handleSubmit} className="contact-form">
                <label className="form-label">
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                    />
                </label>
                <label className="form-label">
                    Comentario:
                    <textarea
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        required
                        className="textarea-field"
                    />
                </label>
                <button type="submit" className="submit-button">Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;
