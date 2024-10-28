import { ProfilePage } from './ProfilePage.js';  

export function Navbar() {
  const navbar = document.createElement('div');
  navbar.classList.add('navbar');

  const title = document.createElement('h2');
  title.textContent = 'Birdies';

  const subtitle = document.createElement('p');
  subtitle.textContent = 'Find your flock';

  const notifications = document.createElement('div');
  notifications.classList.add('notifications');

  const notificationText = document.createElement('span');
  notificationText.textContent = 'Notifications';
  
  const badge = document.createElement('span');
  badge.classList.add('badge');
  badge.textContent = '2';
  notifications.append(notificationText, badge);

  const navLinks = ['Home', 'RSOs + Events', 'Postings'].map((text, index) => {
    const link = document.createElement('a');
    link.className = 'nav-link';
    link.href = '#';
    link.textContent = text;
    if (index === 0) link.classList.add('active');
    return link;
  });

  const navContainer = document.createElement('nav');
  navContainer.append(...navLinks);

  const createEventButton = document.createElement('button');
  createEventButton.classList.add('create-event-btn');
  createEventButton.textContent = '+ Create Event';

  const userProfile = document.createElement('div');
  userProfile.classList.add('user-profile');
  
  // Navigate to ProfilePage
  const profileImage = document.createElement('img');
  profileImage.src = '../src/components/profile.jpg';
  profileImage.alt = 'Profile';
  profileImage.classList.add('profile-pic');
  profileImage.addEventListener('click', () => {
    document.getElementById('app').innerHTML = ''; 
    document.getElementById('app').appendChild(ProfilePage());  
  });

  const userInfo = document.createElement('div');
  userInfo.classList.add('user-info');

  const userName = document.createElement('span');
  userName.textContent = 'John Doe';
  userName.style.display = 'block';
  const userRole = document.createElement('small');
  userRole.textContent = 'Guitarist';

  userInfo.append(userName, userRole);

  userProfile.append(profileImage, userInfo);

  navbar.append(title, subtitle, notifications, navContainer, createEventButton, userProfile);
  return navbar;
}


    