import React from 'react';

const steps = [
  { title: 'Консультация.', text: 'В офисе, по телефону. Приходить может жена или мать.' },
  { title: 'Разбор документов.', text: 'Работаем даже с фотографиями, недостающие справки запрашиваем сами.' },
  { title: 'Обращения.', text: 'Готовим рапорты, жалобы и запросы в часть, госпиталь, военную прокуратуру. Если нужно, идем в суд.' },
  { title: 'Результат.', text: 'Направление на ВВК, отмененный приказ, увольнение или выплаты на счет.' },
];

export default function Workflow() {
  return (
    <section className="workflow-section" id="workflow" aria-labelledby="workflow-heading">
      <h2 id="workflow-heading">Ведем дело удаленно. Достаточно фото документов</h2>
      <ol className="workflow-steps">
        {steps.map((step) => (
          <li key={step.title}>
            <div className="workflow-copy">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="workflow-note">Все это время юрист на связи с семьей по телефону и в мессенджере.</p>
    </section>
  );
}
