import React from 'react';

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews" tabIndex={-1} aria-labelledby="reviews-heading">
      <div className="reviews-intro">
        <h2 id="reviews-heading">Отзывы на Яндекс Картах</h2>
      </div>
      <div className="reviews-widget">
        <iframe
          title="Отзывы о компании «Правовая помощь» на Яндекс Картах"
          src="https://yandex.ru/maps-reviews-widget/25885984565?comments"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
