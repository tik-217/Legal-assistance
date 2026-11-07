import React from 'react';

export default function Pricing({ onContact }) {
  return (
    <section className="pricing-section" id="pricing" aria-labelledby="pricing-heading">
      <h2 id="pricing-heading">Первая консультация бесплатно, документы от 3 000 ₽</h2>
      <dl className="pricing-list">
        <div className="pricing-row">
          <dt>Консультация и разбор документов</dt>
          <dd>Бесплатно</dd>
        </div>
        <div className="pricing-row">
          <dt>Рапорт, жалоба, обращение</dt>
          <dd>от 3 000 ₽</dd>
        </div>
        <div className="pricing-row">
          <dt>Полное ведение дела до результата</dt>
          <dd>от [уточнить] ₽</dd>
        </div>
      </dl>
      <p className="pricing-note">Что входит в ведение дела и есть ли оплата частями или после выплаты [уточнить].</p>
      <div className="pricing-action">
        <button className="button primary-button" type="button" onClick={onContact}>
          <span>Разобрать мою ситуацию бесплатно</span>
          <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#arrow" /></svg>
        </button>
      </div>
    </section>
  );
}
