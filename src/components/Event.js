 
export function Events() {
  const section = document.createElement('section');
  section.classList.add('events-section');

  const heading = document.createElement('h3');
  heading.textContent = 'Events';
  section.appendChild(heading);

  const eventCardsContainer = document.createElement('div');
  eventCardsContainer.classList.add('event-cards');

  const events = [
    {
      title: 'A Ghibli Medley',
      description: 'Concert by music for charity',
      date: 'May 22, 2024',
      time: '7:30 PM',
      admission: 'Free Admission',
      image: '../src/components/event.jpg'
    },
    {
      title: 'A Ghibli Medley',
      description: 'Concert by music for charity',
      date: 'May 22, 2024',
      time: '7:30 PM',
      admission: 'Free Admission',
      image: '../src/components/event.jpg'
    },
    {
      title: 'A Ghibli Medley',
      description: 'Concert by music for charity',
      date: 'May 22, 2024',
      time: '7:30 PM',
      admission: 'Free Admission',
      image: '../src/components/event.jpg'
    },
    {
      title: 'A Ghibli Medley',
      description: 'Concert by music for charity',
      date: 'May 22, 2024',
      time: '7:30 PM',
      admission: 'Free Admission',
      image: '../src/components/event.jpg'
    },

  ];

  events.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card');

    const eventImage = document.createElement('img');
    eventImage.src = event.image;
    eventImage.alt = event.title;
    eventImage.classList.add('event-image');

    const eventInfo = document.createElement('div');
    eventInfo.classList.add('event-info');

    const title = document.createElement('h4');
    title.classList.add('event-title');
    title.textContent = event.title;

    const description = document.createElement('p');
    description.classList.add('event-description');
    description.textContent = event.description;

    const details = document.createElement('div');
    details.classList.add('event-details');

    const date = document.createElement('p');
    date.classList.add('event-date');
    date.textContent = `${event.date} | ${event.time}`;

    const admission = document.createElement('p');
    admission.classList.add('event-admission');
    admission.textContent = event.admission;

    details.append(date, admission);
    eventInfo.append(title, description, details);
    eventCard.append(eventImage, eventInfo);

    eventCardsContainer.appendChild(eventCard);
  });

  section.appendChild(eventCardsContainer);
  return section;
}
