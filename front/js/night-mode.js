class NightMode {
   constructor()  {
      this.init();
   }

   init() {
      this.setThemeOption(this.getThemeOption());

      const togglers = document.querySelectorAll('[data-night-mode-toggler]');

      togglers.forEach(toggler => {
         toggler.addEventListener('click', event => {
            this.toggleThemeOption();          
         });
      });
   }

   toggleThemeOption() {
      let themeOption = this.getThemeOption();

      document.querySelector('html').classList.add('night-mode-transitioning');

      themeOption = (themeOption == 'dark') ? 'light' : 'dark';

      this.setThemeOption(themeOption);
      
      setTimeout(() => {
         document.querySelector('html').classList.remove('night-mode-transitioning');
      }, 500);
   }

   getDefaultThemeOption() {
      const themPreference = window.matchMedia('(prefers-color-scheme: dark)');
      if (themPreference.matches)
         return'dark';         

      return 'light';
   }

   getThemeOption() {
      const themeOption = localStorage.getItem('theme');

      if (!themeOption)
         return getDefaultThemeOption();
      
      return themeOption;
   }

   setThemeOption(themeOption) {
      if (themeOption == 'dark')
         document.querySelector('html').classList.add('dark');
      else
         document.querySelector('html').classList.remove('dark');

      localStorage.setItem('theme', themeOption);
   }
}

const NightModeInit = () => {
   return new NightMode();
}

export default NightModeInit;