import React, { useEffect, useRef, useState } from "react";
import teamPhoto from './assets/team.webp';
import logo from './assets/logo.jpg';
import goodPlaceBadge from './assets/yandex-good-place.png';

function IconDefinitions() {
  return (
  <svg className="svg-defs" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="arrow" viewBox="0 0 24 24"><path d="M4 12h15m-6-6 6 6-6 6"/></symbol>
    <symbol id="phone" viewBox="0 0 24 24"><path d="m7 3 3 5-2.5 2c1.5 3 3.5 5 6.5 6.5l2-2.5 5 3c0 2-1.5 4-4 4C9 20 4 15 3 7c0-2.5 2-4 4-4Z"/></symbol>
  </svg>
  );
}

function Header({ onContact }) {
  return (
    <header className="header">
      <a className="brand" href="#main" aria-label="Правовая помощь, на главную">
        <img className="brand-mark" src={logo} alt="" width="44" height="44" />
        <span className="brand-words"><strong>Правовая помощь</strong><span>Юридическая компания</span></span>
      </a>
      <nav className="desktop-nav" aria-label="Основная навигация">
        <a className="nav-current" href="#main">Военное право</a>
        <button type="button" onClick={onContact}>Контакты</button>
      </nav>
      <div className="header-contact"><a href="tel:+79614631334">+7 (961) 463-13-34</a></div>
      <button className="menu-button" type="button" aria-label="Открыть контакты" onClick={onContact}><span></span><span></span></button>
    </header>
  );
}

function HeroOffer({ onContact }) {
  return (
        <section className="offer" aria-labelledby="main-heading">
          <h1 id="main-heading">Добиваемся ВВК, законного увольнения и выплат для участников СВО и их семей</h1>
          <p className="lead">Обжалуем отказ в ВВК и неверную категорию годности. Сопровождаем увольнение при законных основаниях, помогаем получить боевые, страховые выплаты и компенсации за ранение.</p>
          <div className="offer-action">
            <div className="action-row">
              <button type="button" className="button primary-button" onClick={onContact}><span>Разобрать мою ситуацию бесплатно</span><svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#arrow"/></svg></button>
            </div>
            <p className="action-note">Юрист выслушает вас, уточнит детали и объяснит, что можно сделать в вашей ситуации.</p>
            
          </div>
        </section>
  );
}

function TeamPhoto() {
  return (
        <figure className="team-visual">
          <img className="team-photo" src={teamPhoto} alt="Два человека с документом в офисе юридической компании" fetchPriority="high" />
        </figure>
  );
}

function TrustStrip() {
  return (
      <section className="trust-strip" aria-label="Отзывы и награда компании">
        <a className="rating" href="https://yandex.ru/maps/org/pravovaya_pomoshch/25885984565/" target="_blank" rel="noopener noreferrer" aria-label="Рейтинг 5,0 и 187 отзывов на Яндекс Картах, откроются в новой вкладке"><span className="rating-value">5,0</span><span className="rating-text"><span className="stars" aria-hidden="true">★★★★★</span><span>187 отзывов на Яндекс Картах</span></span></a>
        <div className="trust-item award"><img className="award-symbol" src={goodPlaceBadge} alt="" /><span><strong>Хорошее место 2026</strong><small>По оценкам посетителей Яндекс Карт</small></span></div>
      </section>
  );
}

function ContactDialog({ open, onClose, onComplete }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const element = dialogRef.current;
    if (open && !element.open) {
      element.showModal();
    }
    if (!open && element.open) element.close();
  }, [open]);

  function handleBackdrop(event) {
    if (event.target !== event.currentTarget) return;
    const box = event.currentTarget.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) onClose();
  }
  return (
  <dialog ref={dialogRef} onClose={onClose} onCancel={onClose} onClick={handleBackdrop} className="contact-dialog" aria-labelledby="dialog-title">
    <button className="close-dialog" type="button" onClick={onClose} aria-label="Закрыть окно"><svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg></button>
    <h2 id="dialog-title">Разберем вашу ситуацию</h2>
    <form className="contact-form" onSubmit={(event) => {
      event.preventDefault();
      event.currentTarget.reset();
      onComplete();
    }}>
      <label htmlFor="contact-phone">Номер телефона</label>
      <input id="contact-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+7 (___) ___-__-__" required onInput={(event) => {
        const digits = event.currentTarget.value.replace(/\D/g, '');
        event.currentTarget.setCustomValidity(digits.length >= 10 && digits.length <= 15 ? '' : 'Введите номер телефона: от 10 до 15 цифр.');
      }} aria-describedby="phone-hint" />
      <p className="phone-hint" id="phone-hint">Ответим в течение 30 минут</p>
      <label className="consent-label">
        <input name="consent" type="checkbox" required />
        <span>Я даю согласие на обработку персональных данных для связи по моей заявке{import.meta.env.VITE_PRIVACY_POLICY_URL && <> и ознакомлен с <a href={import.meta.env.VITE_PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer">политикой обработки персональных данных</a></>}.</span>
      </label>
      <button className="button primary-button" type="submit">Разобрать мою ситуацию</button>
    </form>
  </dialog>
  );
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [showThankYou, setShowThankYou] = useState(() => new URLSearchParams(window.location.search).has('thank-you'));
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  useEffect(() => {
    function syncLocation() {
      setContactOpen(false);
      setShowThankYou(new URLSearchParams(window.location.search).has('thank-you'));
    }
    window.addEventListener('popstate', syncLocation);
    return () => window.removeEventListener('popstate', syncLocation);
  }, []);

  useEffect(() => {
    document.title = showThankYou ? 'Спасибо | Правовая помощь' : 'Правовая помощь | Военное право';
    if (showThankYou) {
      document.getElementById('thank-you-title')?.focus();
      window.scrollTo(0, 0);
    }
  }, [showThankYou]);

  function navigateThankYou(visible) {
    const url = new URL(window.location.href);
    if (visible) url.searchParams.set('thank-you', '1');
    else url.searchParams.delete('thank-you');
    url.hash = '';
    window.history.pushState(null, '', url);
    setContactOpen(false);
    setShowThankYou(visible);
  }

  return (
    <>
      <IconDefinitions />
      <div className="site-shell">
        <Header onContact={openContact} />
        <main id="main" tabIndex={-1}>
          {showThankYou ? (
            <section className="thank-you" aria-labelledby="thank-you-title">
              <svg className="thank-you-icon icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m7 12 3 3 7-7"/></svg>
              <h1 id="thank-you-title" tabIndex={-1}>Спасибо за обращение!</h1>
              <button className="button primary-button" type="button" onClick={() => navigateThankYou(false)}>Вернуться на главную</button>
            </section>
          ) : (
          <div className="hero-layout">
            <div className="hero-content">
              <HeroOffer onContact={openContact} />
              <TrustStrip />
            </div>
            <TeamPhoto />
          </div>
          )}
        </main>
      </div>
      <ContactDialog open={contactOpen} onClose={closeContact} onComplete={() => navigateThankYou(true)} />
    </>
  );
}
