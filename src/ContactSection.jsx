import React from 'react';
import ContactForm from './ContactForm.jsx';

export default function ContactSection({ onComplete }) {
  return (
    <section className="contact-section" id="consultation" aria-labelledby="consultation-heading">
      <div className="contact-intro">
        <h2 id="consultation-heading">Расскажите, что случилось. Ответим и скажем, что можно сделать</h2>
      </div>
      <ContactForm idPrefix="consultation" onComplete={onComplete} />
    </section>
  );
}
