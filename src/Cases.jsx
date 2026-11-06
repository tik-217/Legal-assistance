import React, { useEffect, useRef } from 'react';

const cases = [
  {
    title: 'Необоснованно уволили по категории «В».',
    text: 'Обжаловали категорию и приказ. Категорию изменили на «Д», приказ министра обороны отменили, военнослужащего восстановили в должности, присвоили звание лейтенанта и выплатили все положенное.',
    lawyers: 'Шабалдас Алексей Алексеевич',
  },
  {
    title: 'Отказывали в ВВК в Москве, хотя в Ставрополе нет нужных специалистов.',
    text: 'Обратилась 14 февраля 2025, направление в Москву получила 3 марта, через 17 дней.',
    lawyers: 'Емельченко Кирилл Александрович, Шабалдас Алексей Алексеевич',
  },
  {
    title: 'После ранения и контузии отправили обратно без ВВК, объявили в СОЧ.',
    text: 'Собрали справки для выплат, добились ВВК с правильной категорией. Юрист выехала в войсковую часть в Ростов, урегулировала ситуацию и вернула военнослужащего домой.',
    lawyers: 'Черкашина Татьяна Викторовна',
  },
  {
    title: 'Отказывали в ВВК и лечении, говорили служить дальше.',
    text: 'Подготовили обращения и представляли интересы в суде. Военнослужащего направили на ВВК, установили категорию «В», уволили со службы, и он встал на учет в военкомате.',
    lawyers: 'Емельченко Кирилл Александрович, Шабалдас Алексей Алексеевич',
  },
  {
    title: 'Семья долго сама добивалась увольнения отца, военная прокуратура даже не отвечала на обращения.',
    text: 'Юрист вел дело почти год и добился увольнения.',
    lawyers: 'Утюшев Жаслан Саматович',
  },
];

export default function Cases({ onContact }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    function closeOutsideCase(event) {
      const openCase = sectionRef.current?.querySelector('.case-item[open]');
      if (openCase && !openCase.contains(event.target)) openCase.open = false;
    }
    document.addEventListener('click', closeOutsideCase);
    return () => document.removeEventListener('click', closeOutsideCase);
  }, []);

  return (
    <section ref={sectionRef} className="cases-section" id="cases" tabIndex={-1} aria-labelledby="cases-heading">
      <header className="cases-header">
        <h2 id="cases-heading">Каких результатов мы добились для военнослужащих и их семей</h2>
      </header>
      <div className="cases-list">
        {cases.map((item) => (
          <div className="case-slot" key={item.title}>
          <div className="case-placeholder" aria-hidden="true">
            <span>{item.title}</span>
            <span className="case-placeholder-toggle" />
          </div>
          <details className="case-item" name="military-cases">
            <summary>
              <h3>{item.title}</h3>
              <svg className="icon case-toggle" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5v14" /></svg>
            </summary>
            <div className="case-body">
              <p className="case-text">{item.text}</p>
              <p className="case-lawyers"><i>{item.lawyers}</i></p>
            </div>
          </details>
          </div>
        ))}
      </div>
      <div className="cases-action">
        <button className="button primary-button" type="button" onClick={onContact}>
          <span>Разобрать мою ситуацию бесплатно</span>
          <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><use href="#arrow" /></svg>
        </button>
      </div>
    </section>
  );
}
