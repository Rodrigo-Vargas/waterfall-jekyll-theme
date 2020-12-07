
const pills = document.querySelectorAll('[data-toggle="pill"]');

console.log(`Found ${pills.length} pills on this page`);

pills.forEach(pill => {
   pill.addEventListener('click', event => {
      event.preventDefault();

      const href = event.target.getAttribute('href');
      deactivateAllPills(event.target);
      event.target.classList.add('active');

      const target = document.querySelector(href);

      hideAllTabs(target)
      .then(() => {
         target.classList.add('active');
         
         setTimeout(() => {
            target.classList.add('show');
         }, 100)
      });
   });
});


const deactivateAllPills = (targetPill) => {
   const pills = targetPill.parentNode.querySelectorAll('[data-toggle="pill"]');

   pills.forEach(pill => {
      pill.classList.remove('show');
      pill.classList.remove('active');
   });
}

const hideAllTabs = (targetTab) => {
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