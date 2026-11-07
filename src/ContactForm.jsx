import React from 'react';
import { CONSENT_URL, PRIVACY_URL } from './legal-links.js';

export default function ContactForm({ onComplete, topic = '', idPrefix = 'contact' }) {
  const phoneId = `${idPrefix}-phone`;
  const hintId = `${idPrefix}-phone-hint`;

  return (
    <form className="contact-form" onSubmit={(event) => {
      event.preventDefault();
      event.currentTarget.reset();
      onComplete();
    }}>
      <input type="hidden" name="topic" value={topic} />
      <label htmlFor={phoneId}>Номер телефона</label>
      <input id={phoneId} name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+7 (___) ___-__-__" required onInput={(event) => {
        const value = event.currentTarget.value.trim();
        const digits = value.replace(/\D/g, '');
        const valid = /^\+?[\d\s().-]+$/.test(value) && digits.length >= 10 && digits.length <= 15;
        event.currentTarget.setCustomValidity(!value || valid ? '' : 'Введите корректный номер телефона: от 10 до 15 цифр, без букв.');
      }} aria-describedby={hintId} />
      <p className="phone-hint" id={hintId}>Ответим в течение 30 минут</p>
      <div className="consent-control">
        <label className="consent-label">
          <input name="consent" type="checkbox" required />
          <span>Я даю <a href={CONSENT_URL} target="_blank" rel="noopener noreferrer">согласие на обработку персональных данных</a> для связи по моей заявке в соответствии с <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer">политикой обработки персональных данных</a>.</span>
        </label>
      </div>
      <button className="button primary-button" type="submit">Разобрать мою ситуацию бесплатно</button>
    </form>
  );
}
