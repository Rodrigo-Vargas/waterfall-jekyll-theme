class AnchorTransition {
   constructor() {
      this.init();
   }

   init() {
      const anchors = document.querySelectorAll('[data-anchor-transition');

      anchors.forEach(anchor => {
         anchor.addEventListener('click', event => {
            event.preventDefault();

            var target = event.target;

            while (target) {
               if (target instanceof HTMLAnchorElement) {
                  break;
               }

               target = target.parentNode;
            }

            const elementSelector = target.getAttribute('href');
            const element = document.querySelector(elementSelector);

            if (!element)
               return false;

            window.scroll({ top: element.offsetTop, left: 0, behavior: 'smooth' });

            return false;
         });
      });
   }
}

const AnchorTransitionInit = () => {
   return new AnchorTransition();
}

export default AnchorTransitionInit;