import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css'; // Ensure you create and style this CSS file

function ContactTab() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_nfdxpnp', 'template_qk0bt2p', e.target, 'uyLDOtNJEwFyrTldY')
      .then((result) => {
        alert('Message sent successfully!');
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
      }, (error) => {
        alert('An error occurred, please try again.');
      });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>CONTACTEZ-NOUS</h2>
      <div className="form-group">
        <label>Nom</label>
        <input type="text" name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>E-mail</label>
        <input type="email" name="email" placeholder="Votre adresse mail" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Téléphone</label>
        <input type="tel" name="phone" placeholder="Avec l'indicatif de votre pays" value={formData.phone} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea name="message" placeholder="Votre message ici" value={formData.message} onChange={handleChange} required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default ContactTab;
