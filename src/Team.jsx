import React from 'react';

const lawyers = [
  { name: 'Емельченко Кирилл Александрович' },
  { name: 'Шабалдас Алексей Алексеевич' },
  { name: 'Утюшев Жаслан Саматович' },
  { name: 'Черкашина Татьяна Викторовна' },
  { name: 'Калугина Юлия Викторовна' },
  { name: 'Жанна Цолаковна' },
];

export default function Team() {
  return (
    <section className="team-section" id="team" aria-labelledby="team-heading">
      <h2 id="team-heading">Военными делами у нас занимаются шесть юристов</h2>
      <ul className="team-grid">
        {lawyers.map((lawyer) => (
          <li key={lawyer.name}>
            <div className="team-portrait" role="img" aria-label="Нейтральный силуэт вместо фотографии специалиста">
              <svg viewBox="0 0 320 400" fill="none" aria-hidden="true">
                <circle cx="160" cy="130" r="55" />
                <path d="M48 400v-65c0-62 50-112 112-112s112 50 112 112v65H48Z" />
              </svg>
            </div>
            <h3>{lawyer.name}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
