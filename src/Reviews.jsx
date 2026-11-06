import React from 'react';

const reviewsUrl = 'https://yandex.ru/maps/org/pravovaya_pomoshch/25885984565/reviews/';

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews" tabIndex={-1} aria-labelledby="reviews-heading">
      <div className="reviews-intro">
        <h2 id="reviews-heading">Отзывы на Яндекс Картах</h2>
        <p>Отзывы клиентов о работе юридической компании «Правовая помощь».</p>
      </div>
      <div className="reviews-widget">
        <iframe
          title="Отзывы о компании «Правовая помощь» на Яндекс Картах"
          src="https://yandex.ru/maps-reviews-widget/25885984565?comments"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <a className="reviews-source" href={reviewsUrl} target="_blank" rel="noopener noreferrer">
        <span>Все отзывы на Яндекс Картах</span>
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#arrow" /></svg>
      </a>
    </section>
  );
}
