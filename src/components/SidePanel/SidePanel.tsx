import sidebarDesktop from '@assets/images/bg-sidebar-desktop.svg';
import sidebarMobile from '@assets/images/bg-sidebar-mobile.svg';
import advanced from '@assets/images/icon-advanced.svg';
import arcade from '@assets/images/icon-arcade.svg';
import checkmark from '@assets/images/icon-checkmark.svg';
import pro from '@assets/images/icon-pro.svg';
import thankYou from '@assets/images/icon-thank-you.svg';

function SidePanel() {
  return (
    <div className="bg-[url('./src/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-contain bg-center">
      <a>
        <p>Step 1</p>
        <p>Your Info</p>
      </a>
      <a>
        <p>Step 2</p>
        <p>Select Plan</p>
      </a>
      <a>
        <p>Step 3</p>
        <p>Add-ons</p>
      </a>
      <a>
        <p>Step 4</p>
        <p>Summary</p>
      </a>
    </div>
  );
}

export default SidePanel;
