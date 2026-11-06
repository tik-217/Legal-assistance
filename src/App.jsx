import React, { useEffect, useRef, useState } from "react";
import teamPhoto from './assets/team.webp';
import logo from './assets/logo.jpg';
import goodPlaceBadge from './assets/yandex-good-place.png';
import Cases from './Cases.jsx';
import Situations from './Situations.jsx';
import Reviews from './Reviews.jsx';
import HonestAssessment from './HonestAssessment.jsx';
import Workflow from './Workflow.jsx';
import Team from './Team.jsx';
import Pricing from './Pricing.jsx';
import Questions from './Questions.jsx';
import ContactForm from './ContactForm.jsx';
import ContactSection from './ContactSection.jsx';
import Footer from './Footer.jsx';
import { navigationItems } from './navigation.js';

function IconDefinitions() {
  return (
  <svg className="svg-defs" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <symbol id="arrow" viewBox="0 0 24 24"><path d="M4 12h15m-6-6 6 6-6 6"/></symbol>
    <symbol id="phone" viewBox="0 0 24 24"><path d="m7 3 3 5-2.5 2c1.5 3 3.5 5 6.5 6.5l2-2.5 5 3c0 2-1.5 4-4 4C9 20 4 15 3 7c0-2.5 2-4 4-4Z"/></symbol>
  </svg>
  );
}

function Header({ onContact, onHome, onNavigate }) {
  const menuRef = useRef(null);
  const moreRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1051px)');
    function closeOnDesktop() {
      if (desktop.matches) menuRef.current?.close();
      else if (moreRef.current) moreRef.current.open = false;
    }
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  useEffect(() => {
    function closeOutside(event) {
      if (moreRef.current && !moreRef.current.contains(event.target)) moreRef.current.open = false;
    }
    function closeOnEscape(event) {
      if (event.key === 'Escape' && moreRef.current?.open) {
        moreRef.current.open = false;
        moreRef.current.querySelector('summary')?.focus();
      }
    }
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  function closeMenu() {
    menuRef.current?.close();
    setMenuOpen(false);
  }

  function selectMenuItem(event, action) {
    closeMenu();
    action(event);
  }

  return (
    <>
    <header className="header">
      <a className="brand" href="./" onClick={onHome} aria-label="Правовая помощь, на главную">
        <img className="brand-mark" src={logo} alt="" width="44" height="44" />
        <span className="brand-words"><strong>Правовая помощь</strong><span>Юридическая компания</span></span>
      </a>
      <nav className="desktop-nav" aria-label="Основная навигация">
        <a className="nav-current" href="./" onClick={onHome}>Военное право</a>
        {navigationItems.slice(0, 3).map(({ id, label }) => (
          <a key={id} href={`./#${id}`} onClick={(event) => onNavigate(event, id)}>{label}</a>
        ))}
        <details className="nav-more" ref={moreRef}>
          <summary>Ещё<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4" /></svg></summary>
          <div className="nav-more-links">
            {navigationItems.slice(3).map(({ id, label }) => (
              <a key={id} href={`./#${id}`} onClick={(event) => {
                moreRef.current.open = false;
                onNavigate(event, id);
              }}>{label}</a>
            ))}
          </div>
        </details>
      </nav>
      <div className="header-contact"><a href="tel:+79614631334">+7 (961) 463-13-34</a></div>
      <button className="menu-button" type="button" aria-label="Открыть меню" aria-haspopup="dialog" aria-controls="mobile-navigation" aria-expanded={menuOpen} onClick={() => {
        menuRef.current.showModal();
        setMenuOpen(true);
      }}><span></span><span></span></button>
    </header>
    <dialog ref={menuRef} id="mobile-navigation" className="mobile-nav-dialog" aria-labelledby="mobile-nav-title" onClose={() => setMenuOpen(false)} onClick={(event) => {
      if (event.target !== event.currentTarget) return;
      const box = event.currentTarget.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) closeMenu();
    }}>
      <div className="mobile-nav-heading">
        <h2 id="mobile-nav-title">Меню</h2>
        <button type="button" className="mobile-nav-close" aria-label="Закрыть меню" onClick={closeMenu}><svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg></button>
      </div>
      <nav className="mobile-nav-links" aria-label="Мобильная навигация">
        <a href="./" onClick={(event) => selectMenuItem(event, onHome)}>Военное право</a>
        {navigationItems.map(({ id, label }) => (
          <a key={id} href={`./#${id}`} onClick={(event) => selectMenuItem(event, (e) => onNavigate(e, id))}>{label}</a>
        ))}
        <button type="button" onClick={(event) => selectMenuItem(event, onContact)}>Разобрать мою ситуацию бесплатно</button>
      </nav>
      <a className="mobile-nav-phone" href="tel:+79614631334" onClick={closeMenu}>+7 (961) 463-13-34</a>
    </dialog>
    </>
  );
}

function HeroOffer({ onContact }) {
  return (
        <section className="offer" aria-labelledby="main-heading">
          <h1 id="main-heading">Добиваемся ВВК, законного увольнения и выплат для участников СВО и их семей</h1>
          <p className="lead">Отдельная команда юристов по военному праву в Ставрополе. Ведем дело удаленно, пока вы на службе. На бесплатной консультации честно скажем, что вам положено.</p>
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
        <div className="trust-item award"><img className="award-symbol" src={goodPlaceBadge} alt="Награда Яндекс Карт «Хорошее место»" /><span><strong>Хорошее место<span className="award-year"> 2026</span></strong><small>По оценкам посетителей Яндекс Карт</small></span></div>
      </section>
  );
}

function ContactDialog({ open, onClose, onComplete, topic }) {
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
    <div className="dialog-content">
    <h2 id="dialog-title">Разберем вашу ситуацию</h2>
    {topic && <p className="selected-topic">{topic}</p>}
    <ContactForm topic={topic} onComplete={onComplete} />
    </div>
  </dialog>
  );
}

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [contactTopic, setContactTopic] = useState('');
  const [showThankYou, setShowThankYou] = useState(() => new URLSearchParams(window.location.search).has('thank-you'));
  const openContact = (topic = '') => {
    setContactTopic(typeof topic === 'string' ? topic : '');
    setContactOpen(true);
  };
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
    if (url.href !== window.location.href) window.history.pushState(null, '', url);
    setContactOpen(false);
    setShowThankYou(visible);
  }

  function goHome(event) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigateThankYou(false);
    document.getElementById('main')?.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }

  function goToSection(event, sectionId) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const url = new URL(window.location.href);
    url.searchParams.delete('thank-you');
    url.hash = sectionId;
    if (url.href !== window.location.href) window.history.pushState(null, '', url);
    setShowThankYou(false);
    requestAnimationFrame(() => {
      const section = document.getElementById(sectionId);
      if (section) section.tabIndex = -1;
      section?.focus({ preventScroll: true });
      section?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
    });
  }

  return (
    <>
      <IconDefinitions />
      <div className="site-shell">
        <Header onContact={openContact} onHome={goHome} onNavigate={goToSection} />
        <main id="main" tabIndex={-1}>
          {showThankYou ? (
            <section className="thank-you" aria-labelledby="thank-you-title">
              <svg className="thank-you-icon icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m7 12 3 3 7-7"/></svg>
              <h1 id="thank-you-title" tabIndex={-1}>Спасибо за обращение!</h1>
              <button className="button primary-button" type="button" onClick={goHome}>Вернуться на главную</button>
            </section>
          ) : (
          <>
          <div className="hero-layout">
            <div className="hero-content">
              <HeroOffer onContact={openContact} />
              <TrustStrip />
            </div>
            <TeamPhoto />
          </div>
          <Cases onContact={openContact} />
          <Situations onContact={openContact} />
          <Reviews />
          <HonestAssessment onContact={openContact} />
          <Workflow />
          <Team />
          <Pricing onContact={openContact} />
          <Questions />
          <ContactSection onComplete={() => navigateThankYou(true)} />
          </>
          )}
        </main>
        {!showThankYou && <Footer onHome={goHome} onNavigate={goToSection} />}
      </div>
      <ContactDialog open={contactOpen} topic={contactTopic} onClose={closeContact} onComplete={() => navigateThankYou(true)} />
    </>
  );
}
