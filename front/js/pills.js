class Pills {
   constructor() {
      this.init();
   }

   init() {
      const pills = document.querySelectorAll('[data-toggle="pill"]');

      console.log(`Found ${pills.length} pills on this page`);

      pills.forEach(pill => {
         pill.addEventListener('click', event => {
            event.preventDefault();

            const href = event.target.getAttribute('href');
            this.deactivateAllPills(event.target);
            event.target.classList.add('active');

            const target = document.querySelector(href);

            this.hideAllTabs(target)
               .then(() => {
                  target.classList.add('active');

                  setTimeout(() => {
                     target.classList.add('show');
                  }, 100)
               });
         });
      });

      if (pills.length > 0)
      {
         const target = document.querySelector(pills[0].getAttribute('href'))
         target.classList.add('show');
         target.classList.add('active');
      }
   }

   deactivateAllPills(targetPill) {
      const pills = targetPill.parentNode.querySelectorAll('[data-toggle="pill"]');

      pills.forEach(pill => {
         pill.classList.remove('show');
         pill.classList.remove('active');
      });
   }

   hideAllTabs(targetTab) {
      const promises = [];
      const panels = targetTab.parentNode.querySelectorAll('[role="tabpanel"]');

      panels.forEach(panel => {
         panel.classList.remove('show');
         promises.push(new Promise((resolve) => {
            setTimeout(() => {
               panel.classList.remove('active');
               resolve();
            }, 100);
         }))
      });

      return Promise.all(promises);
   }
}

const PillsInit = () => {
   return new Pills();
}

export default PillsInit;