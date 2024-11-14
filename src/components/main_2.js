import { Navbar } from './Navbar.js';
import { SearchBar } from './Searchbar.js';
import { Events } from './Event.js';
import { RSOSection } from './RSOsection.js';

export function HomePage() {
  const container = document.createElement('div');
  container.classList.add('main-content');

  const navbar = Navbar();
  const searchBar = SearchBar();
  const backgroundSection = document.createElement('div');
  backgroundSection.classList.add('background-image');

  const eventsSection = Events();
  const rsoSection = RSOSection();

  container.append(searchBar, backgroundSection, eventsSection, rsoSection);

  const app = document.getElementById('app');
  //app.appendChild(navbar);
  //app.appendChild(container);
}

HomePage();
