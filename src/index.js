import './style.scss';
import placeholderImage2 from './img/sourav-ek-pm0O5YpXeAo-unsplash.jpg';
import {
  handleBackButton,
  preventDefaultOnLinks,
  triggerFlyoutMenu,
  triggerMobileDropdown,
} from './mobile-menu';

// Mobile hamburger menu
triggerFlyoutMenu();
triggerMobileDropdown();
handleBackButton();
preventDefaultOnLinks();
const content2 = document.getElementById('content2');
const img2 = new Image();
img2.src = placeholderImage2;
content2.appendChild(img2);
