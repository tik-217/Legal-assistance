import React from 'react';

const questions = [
  {
    question: 'Муж в зоне СВО, можно ли начать без него?',
    answer: 'Да. Консультацию проходит жена или мать, документы собираем по фото, с военнослужащим связываемся, когда у него есть возможность.',
  },
  {
    question: 'Документов почти нет, только фотографии. Это проблема?',
    answer: 'Нет. Начинаем с того, что есть, недостающие справки запрашиваем сами.',
  },
  {
    question: 'Часть и прокуратура не отвечают месяцами. Вы сможете это изменить?',
    answer: 'Юрист пишет не только в часть, но и в госпиталь и военную прокуратуру, а если ответа нет, идет в суд. В одном из наших дел семья долго писала сама без ответа, с юристом отца уволили. [уточнить формулировку у клиента]',
  },
  {
    question: 'Не будет ли у военнослужащего проблем из-за обращения к юристу?',
    answer: '[уточнить ответ у клиента]',
  },
  {
    question: 'Сколько длится дело?',
    answer: 'От нескольких недель до года, зависит от ситуации. Направление на ВВК в одном из дел получили за 17 дней, увольнение в другом заняло почти год.',
  },
  {
    question: 'Сколько стоит?',
    answer: 'Консультация бесплатно, документы от 3 000 ₽. Точную стоимость ведения дела называем после разбора и фиксируем в договоре. [уточнить]',
  },
];

export default function Questions() {
  return (
    <section className="questions-section" id="questions" aria-labelledby="questions-heading">
      <h2 id="questions-heading">Вопросы</h2>
      <div className="questions-list">
        {questions.map(({ question, answer }) => (
          <details className="question-item" name="military-questions" key={question}>
            <summary>
              <h3>{question}</h3>
              <svg className="icon question-toggle" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </summary>
            <div className="question-answer"><p>{answer}</p></div>
          </details>
        ))}
      </div>
    </section>
  );
}
