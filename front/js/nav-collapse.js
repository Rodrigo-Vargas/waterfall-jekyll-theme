class NavCollapse {
   constructor() {
      this.panels = [];

      this.init();
   }

   init() {
      const navTogglers = document.querySelectorAll('[nav-toggler]');

      navTogglers.forEach(toggler => {
         toggler.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            document.querySelector('body').classList.toggle('nav-opened');
         });

         this.panels.push(document.querySelector(toggler.getAttribute('href')));
      });

      window.onclick = (event) => {
         if (!this.elementIsAPanel(event.target))
            document.querySelector('body').classList.remove('nav-opened');
      }
   }

   elementIsAPanel(target) {
      var isAPanel = false;

      this.panels.forEach(panel => {
         if (panel == target)
            isAPanel = true;
      });

      return isAPanel;
   }
}

const NavCollapseInit = () => {
   return new NavCollapse();
}

export default NavCollapseInit;