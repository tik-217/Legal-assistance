import React from 'react';
import logo from './assets/logo.jpg';
import { CONSENT_URL, PRIVACY_URL } from './legal-links.js';
import { navigationItems } from './navigation.js';

export default function Footer({ onHome, onNavigate }) {
  return (
    <footer className="footer">
      <a className="brand" href="./" onClick={onHome} aria-label="Правовая помощь, на главную">
        <img className="brand-mark" src={logo} alt="" width="44" height="44" />
        <span className="brand-words"><strong>Правовая помощь</strong><span>Юридическая компания</span></span>
      </a>
      <nav className="footer-nav" aria-label="Навигация в подвале">
        <a href="./" onClick={onHome}>Военное право</a>
        {navigationItems.slice(0, 3).map(({ id, label }) => (
          <a key={id} href={`./#${id}`} onClick={(event) => onNavigate(event, id)}>{label}</a>
        ))}
        <a className="footer-document" href={PRIVACY_URL}>Политика обработки персональных данных</a>
        <a className="footer-document" href={CONSENT_URL}>Согласие на обработку персональных данных</a>
      </nav>
      <a className="footer-phone" href="tel:+79614631334">+7 (961) 463-13-34</a>
    </footer>
  );
}
