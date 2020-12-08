class NavCollapse {
   constructor() {
      this.init();
   }

   init() {
      const navTogglers = document.querySelectorAll('[nav-toggler]');

      navTogglers.forEach(toggler => {
         toggler.addEventListener('click', event => {
            document.querySelector('body').classList.toggle('nav-opened');
         });
      });
   }
}

const NavCollapseInit = () => {
   return new NavCollapse();
}

export default NavCollapseInit;