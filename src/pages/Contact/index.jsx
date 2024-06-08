import React, { useState } from 'react';
import './index.scss';
import Button from '../../components/Button';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    const mailtoLink = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    
    // Open the user's email client with pre-filled details
    window.location.href = mailtoLink;
  };

  return (
    <main>
      <h1 className="page-title">contact</h1>
      <p className='text-contact'>Un projet ? N'hésitez pas à me contacter, nous pouvons discuter de toutes vos idées !</p>
      <form className='contact-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Votre nom :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Votre email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Votre message :</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button className='btn' type="submit">Envoyez votre message</button>
      </form>
    </main>
  );
}

export default Contact;
