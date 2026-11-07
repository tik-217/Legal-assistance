import React from 'react';

const situations = [
  { title: 'Отправляют обратно без ВВК', description: ', несмотря на ранение или контузию' },
  { title: 'Поставили не ту категорию годности', description: ' или не направляют на ВВК в нужный госпиталь' },
  { title: 'Не отпускают со службы', description: ' при законных основаниях или уволили с нарушениями' },
  { title: 'Не платят положенное', description: ', боевые, страховые, компенсации за ранение' },
  { title: 'Объявили в СОЧ', description: ', и нужно вернуть военнослужащего в правовое поле' },
  { title: 'Погиб или пропал без вести', description: ', семье нужно признание через суд и выплаты' },
];

export default function Situations({ onContact }) {
  return (
    <section className="situations-section" id="situations" tabIndex={-1} aria-labelledby="situations-heading">
      <h2 id="situations-heading">С чем к нам приходят военнослужащие и члены их семьи</h2>
      <div className="situations-grid">
        {situations.map(({ title, description }) => (
          <button className="situation-card" type="button" key={title} onClick={() => onContact()}>
            <span className="situation-copy"><strong>{title}</strong>{description}</span>
            <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#arrow" /></svg>
          </button>
        ))}
      </div>
      <div className="situations-action">
        <p>Не нашли свой случай? Оставьте номер телефона, ответим, можем ли помочь.</p>
        <button className="button primary-button" type="button" onClick={() => onContact()}><span>Разобрать мою ситуацию бесплатно</span><svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#arrow" /></svg></button>
      </div>
    </section>
  );
}
