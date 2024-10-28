 import { Navbar } from './Navbar.js';
import { HomePage } from './main.js';
 

export function ProfilePage() {
  const navbar = Navbar();

  const title = navbar.querySelector('h2');
  title.style.cursor = 'pointer';
  title.addEventListener('click', () => {
    document.getElementById('app').innerHTML = ''; 
    HomePage();  
  });

  const app = document.getElementById('app');
    app.appendChild(navbar);

  return appContainer;
}
