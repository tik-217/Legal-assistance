import React from 'react';

export default function HonestAssessment({ onContact }) {
  return (
    <section className="assessment-section" id="honest-assessment" aria-labelledby="assessment-heading">
      <h2 id="assessment-heading">Если вам не положено, скажем об этом на консультации</h2>
      <div className="assessment-content">
        <p>К нам приходят после других юристов, которые обещали все выплаты и просили крупную сумму вперед. Мы так не работаем. На первой встрече разбираем документы и называем, что положено по закону, а что нет. Если шансов нет, вы уйдете без договора и без оплаты.</p>
        <div className="assessment-story">
          <p>Один из клиентов так и пришел. В другой фирме ему пообещали все и назвали большую сумму, у нас объяснили, что часть выплат по закону не положена, а остальное можно получить. Он вернулся, документы подготовили за 3 дня, через полтора месяца пришли все положенные выплаты.</p>
        </div>
      </div>
      <div className="assessment-action">
        <button className="button primary-button" type="button" onClick={onContact}>
          <span>Разобрать мою ситуацию бесплатно</span>
          <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#arrow" /></svg>
        </button>
      </div>
    </section>
  );
}
